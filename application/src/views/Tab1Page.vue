<template>
  <ion-page>
    <ion-header class="flex flex-col items-center justify-center gap-3 p-10">
      <img class="w-1/6" src="../../resources/icons/helpr-logo-icon-md-blanc.svg" alt=""/>
      <ion-title class="font-bold text-4xl">Sign in</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
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
</script>
