<template>
  <ion-page>
    <ion-header class="flex flex-col items-center justify-center gap-3 p-10">
      <Logo class="w-16 h-32 mt-6"/>
      <ion-title class="font-bold text-3xl mt-36">Sign in</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="w-5/6 mt-28">
        <ion-row class="h-full">
          <ion-col class="h-full">
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input type="email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Password</ion-label>
                  <ion-input type="password"></ion-input>
                </ion-item>
                <ion-button expand="block" class="mt-10 cosmos-gradient">Sign in</ion-button>
                <ion-row class="justify-center">
                  <ion-col>
                    <ion-button href="tabs/forgotpassword" fill="clear">Forgot Password</ion-button>
                    <ion-button href="tabs/signup" fill="clear" class="cosmos-gradient-text">Sign up</ion-button>
                  </ion-col>
                </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import Logo from "@/components/Logo.vue";
</script>
