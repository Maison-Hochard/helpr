import Stripe from "stripe";
import { Subscription, User } from "@prisma/client";
import { createOrUpdateSubscription, getSubscriptionById, getUserByStripeCustomerId } from "~/server/app/userService";

const config = useRuntimeConfig();
const stripe = new Stripe(config.private.stripeSecretKey, {
  apiVersion: "2022-11-15",
});

export async function createStripeCustomer(email: string): Promise<{ stripeCustomerId: string }> {
  const customer = await stripe.customers.create({
    email,
  });
  return {
    stripeCustomerId: customer.id,
  };
}

export async function deleteStripeCustomer(stripeCustomerId: string) {
  await stripe.customers.del(stripeCustomerId);
}

export async function getSubscribeUrl(priceId: string, user: User) {

  const customerEmail = user.email;

  const price = await stripe.prices.retrieve(
    priceId
  );

  let shouldUpdateUser = false;

  if(!user.stripeCustomerId) {
    shouldUpdateUser = true;
    const customer = await stripe.customers.create({ email: customerEmail });
    user.stripeCustomerId = customer.id;
  }

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${config.public.appDomain}app/profile?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.public.appDomain}subscribe/cancel`,
    customer: user.stripeCustomerId
  });

  return {url: session.url as string, user, shouldUpdateUser};
}

export async function handleSubscriptionChange(subscription: Stripe.Subscription, lastEventDate: number): Promise<boolean> {

  const localSubscription = await getSubscriptionById(subscription.id) as Subscription;

  if(localSubscription?.lastEventDate > lastEventDate){
    return true;
  }

  const stripeCustomerId = subscription.customer as string;

  const user = await getUserByStripeCustomerId(stripeCustomerId) as User;

  const data = {
    userId: user.id,
    name: subscription.id,
    stripeId: subscription.id,
    stripeStatus: subscription.status,
    stripePriceId: subscription.items.data[0].price.id,
    quantity: subscription.description,
    trialEndsAt: subscription.trial_end,
    endsAt: subscription.ended_at,
    startDate: subscription.start_date,
    lastEventDate: lastEventDate
  } as unknown as Subscription;

  await createOrUpdateSubscription(data);

  return true;
}