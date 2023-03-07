<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="m-5">
        <ion-row>
          <img class="w-5" src="../../resources/icons/helpr-logo-icon-md-blanc.svg" alt=""/>
          <ion-title class="m-5" size="large">Store</ion-title>
        </ion-row>
      </ion-header>

      <ion-searchbar></ion-searchbar>

      <ExploreContainer name="Store" />
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
