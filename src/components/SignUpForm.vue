<template>
  <div>
    <div class="custom-input-box">
      <input
        id="input"
        type="file"
        ref="fileInput"
        @change="onChangeImageFile"
      />
      <label for="input">
        <img v-if="!imgExists" :src="dummyProfile" alt="" />
        <img v-if="imgExists" :src="profileValue" alt="" />
      </label>

      <v-icon class="camera-icon" v-if="!imgExists">mdi-image-area</v-icon>
      <v-icon class="delete-icon" v-if="imgExists" @click="clearImage"
        >mdi-delete</v-icon
      >
    </div>
    <p v-if="imageUrlValue" class="field-empty ms-3">Please select an image</p>

    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="12" sm="5">
        <BaseInput
          @keyup="validation"
          :empty="firstNameVal"
          class="input"
          v-model="firstName"
          label="First name"
        />
      </v-col>
      <v-col cols="12" sm="5">
        <BaseInput
          @keyup="validation"
          :empty="lastNameVal"
          class="input"
          v-model="lastName"
          label="Last name"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="companyNameVal"
          class="input"
          v-model="companyName"
          label="Company Name"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="roleVal"
          class="input"
          v-model="role"
          label="Role"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="noOfRecrutementVal"
          class="input"
          type="number"
          v-model="noOfRecrutement"
          label="Number of recrutements"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="emailVal"
          class="input"
          v-model="email"
          type="email"
          label="Email"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="phoneVal"
          class="input"
          v-model="phone"
          type="number"
          label="Number"
        />
      </v-col>
      <v-col cols="12">
        <BaseInput
          @keyup="validation"
          :empty="passwordVal"
          class="input"
          v-model="password"
          type="password"
          label="Password (atleast 6 characters)"
        />
      </v-col>
      <v-col class="mt-3" cols="12">
        <BaseButton
          v-if="singUpBtn"
          :loader="signUpLoader"
          @click="signUp"
          title="Sign up"
          variant="flat"
        />
        <BaseButton
        v-if="!singUpBtn"
          :loader="updateLoader"
          @click="updateProfile"
          class="btn"
          title="Update"
          variant="flat"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import type { UserDetails } from "@/types";
import { computed, ref as vueRef, type Ref } from "vue";
import store from "@/store/store";
import BaseButton from "./BaseButton.vue";
import { useRoute } from "vue-router";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { watch } from "vue";

const storage = getStorage();
const route = useRoute();

const props = defineProps<{
  accountInfo?: UserDetails;
  formStatus?: boolean;
}>();

// Auth user fields -------------------------------------------------
let firstName = vueRef(props.accountInfo?.firstName || "");
let lastName = vueRef(props.accountInfo?.lastName || "");
let companyName = vueRef(props.accountInfo?.companyName || "");
let role = vueRef(props.accountInfo?.role || "");
let noOfRecrutement = vueRef(props.accountInfo?.noOfRecrutement || "");
let email = vueRef(props.accountInfo?.email || "");
let phone = vueRef(props.accountInfo?.phone || "");
let password = vueRef(props.accountInfo?.password || "");

// Form validatoin fields ------------------------------------------
let imageUrlValue = vueRef(false);
let firstNameVal = vueRef(false);
let lastNameVal = vueRef(false);
let companyNameVal = vueRef(false);
let roleVal = vueRef(false);
let noOfRecrutementVal = vueRef(false);
let emailVal = vueRef(false);
let phoneVal = vueRef(false);
let passwordVal = vueRef(false);

// Input image Handling ----------------------------------------------------
let imageFile = vueRef<File | null>();
let imageUrl = vueRef("");

let dummyProfile =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj0GqngJ9vVsSB7zAkP4hS_FCeiusWCemhg&usqp=CAU";

const imageRef = ref(storage, "profile-images/" + imageFile.value?.name);

let file = vueRef<File | null>();
const onChangeImageFile = (event: Event) => {
  file.value = (event.target as HTMLInputElement).files?.[0] || null;
  imageFile.value = file.value;
  if (file.value) imageUrlValue.value = false;
};

const clearImage = () => {
  imageFile.value = null;
};

const userProfile = computed(() => {
  return store.state.currentUserDetails.imageUrl;
});

let profileValue = computed(() => {
  if (userProfile.value && !imageFile.value) return userProfile.value;
  else if (imageFile.value) {
    return URL.createObjectURL(imageFile.value);
  } else {
    return "";
  }
});

const imgExists = computed(() => {
  if (imageFile.value || userProfile.value) return true;
  else return false;
});

// Others -------------------------------------------
const singUpBtn = computed(() => {
  if (route.path == "/sign-up") return true;
  else return false;
});

const signUpLoader = computed(() => {
  return store.state.signUpLoader;
});

let userDetails = computed(() => {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    companyName: companyName.value,
    role: role.value,
    noOfRecrutement: noOfRecrutement.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    userId: store.state.currentUserDetails.userId,
  };
});

// Update User profile Details ---------------
let updateProfile = () => {
  if (
    (!imageFile.value && !userProfile.value) ||
    !firstName.value ||
    !lastName.value ||
    !companyName.value ||
    !role.value ||
    !noOfRecrutement.value ||
    !email.value ||
    !phone.value ||
    !password.value
  ) {
    if (!imageFile.value && !userProfile.value) imageUrlValue.value = true;
    if (!firstName.value) firstNameVal.value = true;
    if (!lastName.value) lastNameVal.value = true;
    if (!companyName.value) companyNameVal.value = true;
    if (!role.value) roleVal.value = true;
    if (!noOfRecrutement.value) noOfRecrutementVal.value = true;
    if (!email.value) emailVal.value = true;
    if (!phone.value) phoneVal.value = true;
    if (!password.value) passwordVal.value = true;
  } else {
    if (imageFile.value) {
      console.log("IF");
      store.state.accountUpdateLoader = true;
      //@ts-ignore
      uploadBytes(imageRef, file.value).then((snapshot) => {
        getDownloadURL(imageRef).then((downloadURL) => {
          imageUrl.value = downloadURL;
          console.log('Image Uploaded')
          store.dispatch("updateProfile", {
            ...userDetails.value,
            imageUrl: imageUrl.value,
          });
        });
      });
    } else {
      console.log("ELSE");
      // store.dispatch("updateProfile", {
      //   ...userDetails.value,
      //   imageUrl: userProfile.value,
      // });
    }
  }
};

const updateLoader = computed(() => {
  return store.state.accountUpdateLoader;
});

// Signup New user -------------------------------------
let signUp = () => {
  if (
    !imageFile.value ||
    !firstName.value ||
    !lastName.value ||
    !companyName.value ||
    !role.value ||
    !noOfRecrutement.value ||
    !email.value ||
    !phone.value ||
    !password.value
  ) {
    if (!imageFile.value) imageUrlValue.value = true;
    if (!firstName.value) firstNameVal.value = true;
    if (!lastName.value) lastNameVal.value = true;
    if (!companyName.value) companyNameVal.value = true;
    if (!role.value) roleVal.value = true;
    if (!noOfRecrutement.value) noOfRecrutementVal.value = true;
    if (!email.value) emailVal.value = true;
    if (!phone.value) phoneVal.value = true;
    if (!password.value) passwordVal.value = true;
  } else {
    store.state.signUpLoader = true;
    //@ts-ignore
    uploadBytes(imageRef, file.value).then((snapshot) => {
      getDownloadURL(imageRef).then((downloadURL) => {
        imageUrl.value = downloadURL;
        store.dispatch("signUp", {
          ...userDetails.value,
          imageUrl: imageUrl.value,
        });
      });
    });
  }
};

// form vlaidations ------------------------------------
watch(imageUrl, () => {
  if (imageUrl.value) imageUrlValue.value = false;
  else imageUrlValue.value = true;
});

const validation = () => {
  if (firstName.value) firstNameVal.value = false;
  if (lastName.value) lastNameVal.value = false;
  if (companyName.value) companyNameVal.value = false;
  if (role.value) roleVal.value = false;
  if (noOfRecrutement.value) noOfRecrutementVal.value = false;
  if (email.value) emailVal.value = false;
  if (phone.value) phoneVal.value = false;
  if (password.value) passwordVal.value = false;
};
</script>

<style scoped lang="scss">
.input {
  margin: 12px 0px;
}

.custom-input-box {
  margin: -88px 10px 4px 10px;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    display: none;
  }

  label {
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  .field-empty {
    color: #db0000;
    animation: error 0.3s linear;
    font-size: 13px;
    line-height: 15px;
  }

  .camera-icon {
    color: #2b2b2b;
  }

  .delete-icon {
    background: #00000042;
    color: #d10e0e;
  }

  .v-icon {
    margin-top: -27px;
    margin-right: 2px;
    border-radius: 50%;
    padding: 14px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

  .delete-icon:hover {
    background: #0000006d;
  }

  .delete-icon:active {
    background: #00000042;
  }
}
</style>
