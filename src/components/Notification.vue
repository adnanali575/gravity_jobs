<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-list
      @click="seenNotifications"
        color="white"
        v-bind="props"
        value="notifications"
      >
        <div class="notifications">
          <img class="bell-icon" src="@/assets/icons/notification_icon.svg" />
        <img
          class="not-seen-indication"
          v-if="!notificatonsSeen"
          src="@/assets/icons/blue_dot.svg"
          alt=""
        />
        </div>
      </v-list>
    </template>

    <v-list>
      <v-list-item class="notication-item">
        <p v-if="notifications.length == 0">Empty</p>
        <v-sheet
          v-else
          v-for="(notification, index) in notifications"
          :key="index"
          height="80"
          class="py-2 d-flex align-center"
        >
          <v-avatar class="profile-avatar me-4">
            <img :src="notification.imageUrl" />
          </v-avatar>

          <div class="inner-content">
            <div class="d-flex justify-space-between">
              <b class="heading">{{ notification.userName }}</b>
              <p>
                {{ hours(notification.hours) }}:{{
                  minutes(notification.minutes)
                }}
                {{ period(notification.hours) }}
              </p>
            </div>
            <div class="text d-flex align-center justify-space-between">
              <p class="notification-message">{{ notification.message }}</p>

              <v-btn
                @click="deleteNotificatoin(notification)"
                density="compact"
                flat
                icon=""
              >
                <v-icon class="delete-icon">mdi-delete</v-icon>
              </v-btn>
            </div>
          </div>
        </v-sheet>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import store from "@/store/store";
import type { Notifications } from "@/types";
import { hours, minutes, period } from "@/functions";
import { computed } from "@vue/reactivity";

const notifications = computed(() => {
  return store.state.notifications;
});

const notificatonsSeen = computed(() => {
  return store.state.currentUserDetails.notificatonsSeen;
});

const seenNotifications = ()=>{
  store.dispatch('seenNotifications')
}

const deleteNotificatoin = (notification: Notifications) => {
  store.dispatch("deleteNotificatoin", notification);
};
</script>

<style scoped lang="scss">
.notication-item {
  width: 310px;
}
.inner-content {
  width: 100%;
}
.heading {
  font-weight: 500;
  font-size: 16px;
  width: 115px;
}
.text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.75px;
}

.notification-message {
  line-height: 16px;
}

.profile-avatar {
  width: 64px;
  height: 64px;

  img {
    width: 100%;
  }
}

.notifications {
  display: flex;
  align-items: flex-start;
  margin-top: 6px;
  width: 24px;
  overflow: unset;
  .bell-icon {
    width: 24px;
    cursor: pointer;
  }

  .not-seen-indication {
    background: white;
    padding: 2px;
    border-radius: 50%;
    transform: translateX(-10px);
    width: 13px;
  }
}

.delete-icon {
  font-size: 20px;
  color: #c30000;
}
</style>
