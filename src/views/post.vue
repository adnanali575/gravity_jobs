<template>
  <!-- <Success greetings="Post submitted successfully" /> -->
  <div class="post">
    <v-sheet class="form-container">
      <div class="custom-input-box">
        <input
          id="input"
          type="file"
          ref="fileInput"
          @change="onChangeImageFile"
        />
        <v-tooltip text="Please select an image of same length and width">
          <template v-slot:activator="{ props }">
            <label v-bind="props" for="input">
              <img v-if="!imgExists" :src="dummyProfile" alt="" />
              <img v-if="imgExists" :src="profileValue" alt="" />
            </label>
          </template>
        </v-tooltip>
        <v-icon class="camera-icon" v-if="!imgExists">mdi-image-area</v-icon>
        <v-icon class="delete-icon" v-if="imgExists" @click="clearImage"
          >mdi-delete</v-icon
        >
      </div>
      <p v-if="imageUrlValue" class="field-empty ms-3">Please select an image</p>
      <h1 class="heading">Enter Your Details and Post a Job</h1>
      <v-form class="form">
        <!-- -------------------------------------------------------------------------------------------- -->
        <div class="dropdown-field-box">
          <div class="drop-down input bg-input-background">
            <SelectDropDown
              :empty="locationValue"
              v-model="location"
              label="Localisation"
              :multiple="false"
              :dropDownItems="locationsList"
            >
            </SelectDropDown>
          </div>
          <div class="drop-down input bg-input-background">
            <SelectDropDown
              :empty="stacksValue"
              v-model="stacks"
              label="Stacks Used"
              :multiple="true"
              :dropDownItems="stacksList"
            >
              <template #controls>
                <v-btn rounded variant="text" color="primary">Clear</v-btn>
              </template>
            </SelectDropDown>
          </div>

          <div class="drop-down input bg-input-background">
            <SelectDropDown
              :empty="seniorityValue"
              v-model="seniority"
              label="Seniority"
              :multiple="true"
              :dropDownItems="seniorityList"
            >
              <template #controls>
                <v-btn rounded variant="text" color="primary">Clear</v-btn>
              </template>
            </SelectDropDown>
          </div>
        </div>
        <!-- -------------------------------------------------------------------------------------------- -->
        <h1 class="heading">Experiences</h1>
        <div class="info-field-box">
          <BaseInput
            @keyup="validation"
            :empty="expertValue"
            class="input"
            v-model="expertInSkill"
            label="Skill"
          />
          <BaseInput
            @keyup="validation"
            :empty="skillStartValue"
            class="input"
            v-model="skillStartingYear"
            type="date"
            label="Starting year of skill"
          />
          <BaseInput
            @keyup="validation"
            :empty="skillfromValue"
            class="input"
            v-model="experienceInSkillFrom"
            label="Skilled from (Country)"
          />
        </div>
        <!-- -------------------------------------------------------------------------------------------- -->

        <h1 class="heading">Education</h1>
        <div class="info-field-box">
          <BaseInput
            @keyup="validation"
            :empty="instituteValue"
            v-model="institution"
            class="input"
            label="Institution"
          />
          <BaseInput
            @keyup="validation"
            :empty="passingYearValue"
            class="input"
            v-model="passingYear"
            type="date"
            label="Passing year"
          />
          <BaseInput
            @keyup="validation"
            :empty="educatedValue"
            class="input"
            v-model="educatedFrom"
            label="Educated from (Country)"
          />
        </div>

        <!-- -------------------------------------------------------------------------------------------- -->
      </v-form>

      <div class="controls py-8">
        <BaseButton class="control-btn" title="Cancel" variant="outlined" />
        <BaseButton
          @click="submitApplication"
          class="control-btn"
          title="Submit"
          variant="flat"
        />
      </div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import SelectDropDown from "@/components/SelectDropDown.vue";
import { computed, ref as vueRef } from "vue";
import store from "@/store/store";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { watch } from "vue";

const storage = getStorage();

let dummyProfile =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj0GqngJ9vVsSB7zAkP4hS_FCeiusWCemhg&usqp=CAU";

const stacksList = ["Vue js", "React", "Angular", "jQuery"];
let locationsList = ["Full-Remote", "Pakistan", "Iran", "United States"];
let seniorityList = ["Junior", "Senior", "Lead", "CTO"];

let imageUlr = vueRef("");
let location = vueRef("");
let stacks = vueRef<string[]>();
let seniority = vueRef<string[]>();
let expertInSkill = vueRef("");
let skillStartingYear = vueRef("");
let experienceInSkillFrom = vueRef("");
let institution = vueRef("");
let passingYear = vueRef("");
let educatedFrom = vueRef("");

let imageFile = vueRef<File | null>();
let snackBar = vueRef(true)

let expertValue = vueRef(false);
let skillStartValue = vueRef(false);
let skillfromValue = vueRef(false);
let instituteValue = vueRef(false);
let passingYearValue = vueRef(false);
let educatedValue = vueRef(false);
let locationValue = vueRef(false);
let stacksValue = vueRef(false);
let seniorityValue = vueRef(false);
let imageUrlValue = vueRef(false);

const validation = () => {
  if (expertInSkill.value) expertValue.value = false;
  if (experienceInSkillFrom.value) skillfromValue.value = false;
  if (institution.value) instituteValue.value = false;
  if (educatedFrom.value) educatedValue.value = false;
};

watch(location, (val) => {
  if (location.value) locationValue.value = false;
  else locationValue.value = true;
});

watch(stacks, (val) => {
  if (val.length > 0) stacksValue.value = false;
  else stacksValue.value = true;
});

watch(seniority, (val) => {
  if (seniority.value.length > 0) seniorityValue.value = false;
  else seniorityValue.value = true;
});

watch(skillStartingYear, (val) => {
  if (skillStartingYear.value) skillStartValue.value = false;
  else skillStartValue.value = true;
});

watch(passingYear, (val) => {
  if (passingYear.value) passingYearValue.value = false;
  else passingYearValue.value = true;
});


const imgExists = computed(() => {
  if (imageFile.value) return true;
  else return false;
});

let profileValue = computed(() => {
  if (imageFile.value) {
    return URL.createObjectURL(imageFile.value);
  } else {
    return "";
  }
});

const clearImage = () => {
  imageFile.value = null;
};
let file = vueRef<File | null>();
const onChangeImageFile = (event: Event) => {
  file.value = (event.target as HTMLInputElement).files?.[0] || null;
  imageFile.value = file.value;

  if (!file.value) return;

  const imageRef = ref(storage, "profile-images/" + imageFile.value?.name);
  uploadBytes(imageRef, file.value).then((snapshot) => {
    getDownloadURL(imageRef).then((downloadURL) => {
      imageUlr.value = downloadURL;
      console.log(downloadURL);
      imageUrlValue.value = false
    });
  });
};

const submitApplication = () => {
  const date = new Date();

  const stacksArray = stacks.value ? Array.from(stacks.value) : [];
  const locationString = location.value;
  const seniorityArray = seniority.value ? Array.from(seniority.value) : [];

  let skilledDate = new Date(skillStartingYear.value);
  let passingDate = new Date(passingYear.value);

  if (
    !imageUlr.value ||
    !locationString ||
    seniorityArray.length <= 0 ||
    stacksArray.length <= 0 ||
    !expertInSkill.value ||
    !skillStartingYear.value ||
    !experienceInSkillFrom.value ||
    !institution.value ||
    !passingYear.value ||
    !educatedFrom.value
  ) {
    console.log("posting fail");
    if (!imageUlr.value) imageUrlValue.value = true;
    if (!expertInSkill.value) expertValue.value = true;
    if (!skillStartingYear.value) skillStartValue.value = true;
    if (!experienceInSkillFrom.value) skillfromValue.value = true;
    if (!institution.value) instituteValue.value = true;
    if (!passingYear.value) passingYearValue.value = true;
    if (!educatedFrom.value) educatedValue.value = true;
    if (!locationString) locationValue.value = true;
    if (stacksArray.length <= 0) stacksValue.value = true;
    if (seniorityArray.length <= 0) seniorityValue.value = true;
  } else {
    store.dispatch("postJob", {
      firstName: store.state.currentUserDetails.firstName,
      lastName: store.state.currentUserDetails.lastName,
      email: store.state.currentUserDetails.email,
      location: locationString,
      stacks: stacksArray,
      seniority: seniorityArray,
      imageUrl: imageUlr.value,
      expertInSkill: expertInSkill.value,
      skillStartingYear: skilledDate,
      experienceInSkillFrom: experienceInSkillFrom.value,
      institution: institution.value,
      passingYear: passingDate,
      educatedFrom: educatedFrom.value,
      userId: store.state.currentUserDetails.userId,
      date: date,
    });
  }
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
.post {
  margin: 110px auto 0px auto;
  padding: 20px;
  max-width: 1400px;

  .custom-input-box {
    margin: 0px 10px;
    // padding-top: 1px;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    input {
      display: none;
    }

    label {
      border-radius: 50%;
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
      margin-top: -31px;
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

  // --------------------------------------------------
  .dropdown-field-box,
  .info-field-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input {
      width: 30%;
      margin: 0px 10px;
    }
  }

  // --------------------------------------------------
  .heading {
    font-size: 25px;
    margin-top: 20px;
    margin: 20px 10px 0px;
  }

  .form-container {
    width: 90%;
    margin: auto;
    padding: 32px 80px 0px 80px;
    box-shadow: $shadow;
  }

  .drop-down {
    border-radius: 40px;
    height: 48px;
    overflow: unset;
    margin: 15px 0px;
  }

  .controls {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    :nth-child(2) {
      margin-left: 30px;
    }

    .control-btn {
      width: 160px;
    }
  }
}

@media (max-width: 1100px) {
  .post {
    padding-bottom: 70px;

    .heading {
      font-size: 20px !important;
    }
    .form-container {
      padding: 32px 40px 0px 40px !important;
      width: 95% !important;
    }
  }
}

@media (max-width: 850px) {
  .post {
    .heading {
      margin: 20px 0px 0px;
    }

    .custom-input-box {
      margin: 0px;
    }
    .form-container {
      padding: 30px 20px;
    }

    .dropdown-field-box,
    .info-field-box {
      flex-direction: column;

      .input {
        width: 100%;
        margin: 10px 0px;
      }
    }

    .controls {
      width: 100%;
      margin: 10px 0px;
    }
  }
}

@media (max-width: 500px) {
  .post {
    padding: 0px;
    padding-bottom: 45px;
  }
  .controls {
    flex-direction: column-reverse;
    align-items: center;

    :nth-child(2) {
      margin-left: 0px !important;
    }

    :nth-child(1) {
      margin-top: 20px;
    }

    .control-btn {
      width: 100% !important;
    }
  }
}
</style>
