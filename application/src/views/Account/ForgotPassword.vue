<template>
  <ion-page>
      <!-- <ion-tab-bar slot="top">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
      </ion-tab-bar> -->
    <ion-header class="flex flex-col items-center justify-center gap-3 p-10">
      <img class="w-1/6 mt-20" src="../../../resources/icons/helpr-logo-icon-md-blanc.svg" alt=""/>
      <ion-title class="font-bold text-3xl mt-10">Forgot Password</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="w-5/6 mt-6">
        <ion-row class="h-full">
          <ion-col class="h-full">
                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input type="email"></ion-input>
                </ion-item>
                <ion-button expand="block" class="mt-4">Send</ion-button>
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
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { home } from "ionicons/icons";
</script>
