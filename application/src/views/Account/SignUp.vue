<template>
  <ion-page>
    <ion-header class="flex flex-col items-center justify-center gap-3 p-10">
      <img class="w-1/6 mt-10" src="../../../resources/icons/helpr-logo-icon-md-blanc.svg" alt=""/>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="w-5/6 mt-6">
        <ion-row class="h-full">
          <ion-col class="h-full">
            <ion-row>
              <ion-item class="w-1/2">
          <ion-label position="floating">First name</ion-label>
              <ion-input type="name"></ion-input>
          </ion-item>
          <ion-item class="w-1/2">
              <ion-label position="floating">Last name</ion-label>
              <ion-input type="name"></ion-input>
          </ion-item>            
        </ion-row>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Confirm Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <ion-button href="" expand="block" class="mt-12">Sign Up</ion-button>
            <ion-button href="tabs/login" expand="block" class="mt-4">Sign In</ion-button>
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
  IonContent,
} from "@ionic/vue";
</script>
