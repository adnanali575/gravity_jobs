<template>
  <div class="post">
    <ErrorMessage></ErrorMessage>
    <v-sheet class="form-container">
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
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import SelectDropDown from "../components/SelectDropDown.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { ref as vueRef, type Ref, watch } from "vue";
import store from "../store/store";

const stacksList = ["Vue js", "React", "Angular", "jQuery"];
let locationsList = ["Full-Remote", "Pakistan", "Iran", "United States"];
let seniorityList = ["Junior", "Senior", "Lead", "CTO"];

let location = vueRef("");
let stacks: Ref<string[] | undefined> = vueRef<string[]>();
let seniority: Ref<string[] | undefined> = vueRef<string[]>();
let expertInSkill = vueRef("");
let skillStartingYear = vueRef("");
let experienceInSkillFrom = vueRef("");
let institution = vueRef("");
let passingYear = vueRef("");
let educatedFrom = vueRef("");

let expertValue = vueRef(false);
let skillStartValue = vueRef(false);
let skillfromValue = vueRef(false);
let instituteValue = vueRef(false);
let passingYearValue = vueRef(false);
let educatedValue = vueRef(false);
let locationValue = vueRef(false);
let stacksValue = vueRef(false);
let seniorityValue = vueRef(false);

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
  if (stacks.value && stacks.value.length > 0) stacksValue.value = false;
  else stacksValue.value = true;
});

watch(seniority, (val) => {
  if (seniority.value && seniority.value.length > 0)
    seniorityValue.value = false;
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

const submitApplication = () => {
  const date = new Date();

  const stacksArray = stacks.value ? Array.from(stacks.value) : [];
  const locationString = location.value;
  const seniorityArray = seniority.value ? Array.from(seniority.value) : [];

  let skilledDate = new Date(skillStartingYear.value);
  let passingDate = new Date(passingYear.value);

  if (
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
      expertInSkill: expertInSkill.value,
      skillStartingYear: skilledDate,
      imageUrl: store.state.currentUserDetails.imageUrl,
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

@media (max-width: 1280px) {
  .post {
    padding-bottom: 80px;
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
    margin-top: 80px;
    padding: 0px 0px 60px 0px;
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
