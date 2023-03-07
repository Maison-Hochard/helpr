<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="m-5">
        <ion-row>
          <img class="w-5" src="../../resources/icons/helpr-logo-icon-md-blanc.svg" alt=""/>
          <ion-title class="m-5" size="large">Flows</ion-title>
        </ion-row>
      </ion-header>

      <ion-row class="w-56 items-center ml-20 mt-12">
        <ion-input
          class="w-3/6"
          placeholder="Name your flow"
          type="text">
        </ion-input>
        <ion-button
          class="w-2/6"
          color="primary"
          expand="block"
          fill="outline"
          shape="round">
          Save
        </ion-button>
      </ion-row>


      <ExploreContainer name="Flows" />
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
import { addCircle } from "ionicons/icons";
</script>
