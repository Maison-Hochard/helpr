<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="store" href="/tabs/store">
          <ion-icon :icon="ellipse" />
          <ion-label>Store</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="flows" href="/tabs/flows">
          <ion-icon :icon="add"/>
          <ion-label>Flows</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="square" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { add, colorFill, ellipse, home, settings, square, triangle } from "ionicons/icons";
</script>
