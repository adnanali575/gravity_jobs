<template>
  <div class="account">
    <v-sheet class="account-form">
      <div class="py-6 d-flex justify-end">
        <v-btn
          v-if="formStatus"
          variant="text"
          color="primary"
          @click="enableform"
          >Edit</v-btn
        >
      </div>
      <v-form :disabled="formStatus">
        <SignUpForm :accountInfo="defaltUserDetails">
          <template #userDetails="userDetails">
            <div v-if="!formStatus" class="btn-box">
              <BaseButton
                @click="disableform"
                class="btn"
                title="Cancel"
                variant="outlined"
              />
              <div>
              </div>
            </div>
          </template>
        </SignUpForm>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "@/components/SignUpForm.vue";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";
import store from "@/store/store";
import { computed } from "@vue/reactivity";

let defaltUserDetails = computed(() => {
  return store.state.currentUserDetails;
});

let formStatus = ref<boolean>(true);

const enableform = () => {
  formStatus.value = false;
};

const disableform = () => {
  formStatus.value = true;
};
</script>

<style scoped lang="scss">
.account {
  margin-top: 90px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.account-form {
  width: 600px;
  padding: 40px;
  margin-top: 14px;
}

.btn-box {
  display: flex;
  justify-content: flex-end;

  :nth-child(1) {
    margin-right: 24px;
  }

  .btn {
    width: 152px;
  }
}

@media (max-width: 1270px) {
  .account {
    padding-bottom: 80px;
  }
}

@media (max-width: 500px) {
  .account {
    margin-top: 58px;
    padding: 0px 0px 56px 0px;
  }

  .account-form {
    padding: 0px 30px 30px;
  }

  .btn-box {
    .btn {
      width: 130px;
    }
  }
}

@media (max-width: 350px) {
  .btn-box {
    flex-direction: column-reverse;

    .btn {
      width: 100%;
    }

    :nth-child(1) {
      margin-top: 10px;
    }
  }
}
</style>
