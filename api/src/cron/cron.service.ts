import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { ProviderService } from "../provider/provider.service";

@Injectable()
export class CronService {
  constructor(private readonly providerService: ProviderService) {}
  // @Cron(CronExpression.EVERY_5_SECONDS)
  async runFlow() {
    console.log("running flow");
    const action = {
      provider: "linear",
      endpoint: "create-issue",
      payload: {
        teamId: "34b08c67-0366-4cc0-8a32-07d481c045f1",
        userId: "c9b836b4-c359-4f6f-8fa5-a0cb00d579ff",
        title: "title " + new Date().toISOString(),
      },
    };
    await fetch(`http://localhost:3000/${action.provider}/${action.endpoint}`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MiwiZW1haWwiOiJocmljaGFyZDIwNkBpY2xvdWQuY29tIiwidXNlcm5hbWUiOiJIdWdvUkNEIiwiaWF0IjoxNjc1NDU2MTk4LCJleHAiOjE2NzU1NDI1OTh9.qejr3H3_EGM0Po3N729j1M48sEkfFCxQzt4nAxv8UHY",
      },
    });
    /*for (const action of recipe.actions) {
    const response = await fetch(`http://localhost:3000/${action.endpoint}`, {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);*/
  }
}
