<template>
  <div class="post">
    <v-sheet class="form-container">
      <h1 class="heading">Enter Your Details and Post a Job</h1>
      <v-form class="form">
        <div class="field-box">
          <BaseInput class="input" v-model="firstName" label="First Name" />
          <BaseInput class="input" v-model="lastName" label="Last Name" />
          <BaseInput class="input" v-model="email" label="Email" />
          <BaseInput
            class="input"
            v-model="location"
            label="Location (Full Remote, Pakistan, Iran, United States)"
          />
        </div>
        <div class="field-box">
          <div class="drop-down input bg-input-background">
            <SelectDropDown
              v-model="stacks"
              label="Stacks Used"
              :multiple="true"
              :dropDownItems="['Vue js', 'React', 'Angular', 'jQuery']"
            >
              <template #control="stacksArray">
                <v-divider class="mb-2"></v-divider>

                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn @click="setStacks" rounded flat color="primary"
                      >Save</v-btn
                    >
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </div>

          <div class="drop-down input bg-input-background">
            <SelectDropDown
              v-model="seniority"
              label="Seniority"
              :multiple="true"
              :dropDownItems="['Junior', 'Senior', 'Lead', 'CTO']"
            >
              <template #control="seniority">
                <v-divider class="mb-2"></v-divider>

                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn @click="setSeniority" rounded flat color="primary"
                      >Save</v-btn
                    >
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </div>
        </div>
        <h1 class="heading">Experiences</h1>
        <div class="info-field-box">
          <BaseInput class="input" v-model="expertInSkill" label="Skilled in" />
          <BaseInput
            class="input"
            v-model="skillStartingYear"
            type="date"
            label="Starting year of skill"
          />
          <BaseInput
            class="input"
            v-model="experienceInSkillFrom"
            label="Learn Skilled from"
          />
        </div>
        <h1 class="heading">Education</h1>
        <div class="info-field-box">
          <BaseInput class="input" v-model="institution" label="Institution" />
          <BaseInput
            class="input"
            v-model="passingYear"
            type="date"
            label="Passing year"
          />
          <BaseInput
            class="input"
            v-model="educatedFrom"
            label="Country from which educated"
          />
        </div>
        <input class="my-8" type="file" />
      </v-form>
      <div class="controls my-3">
        <BaseButton class="control-btn" title="Cancel" variant="outlined" />
        <BaseButton
          @click="postJob"
          class="control-btn"
          title="Post"
          variant="flat"
        />
      </div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import store from "@/store/store";
import SelectDropDown from "@/components/SelectDropDown.vue";
import { ref } from "vue";

let firstName = ref("");
let lastName = ref("");
let email = ref("");
let location = ref("");
let imageUrl = ref<string>(
  "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
);
let stacks = ref<string[]>([]);
let seniority = ref<string[]>([]);

// Experiences
let expertInSkill = ref("");
let skillStartingYear = ref("");
let experienceInSkillFrom = ref("");

// Education
let institution = ref("");
let passingYear = ref("");
let educatedFrom = ref("");

const setStacks = (stacksArray: Array<string>) => {
  stacks.value = stacksArray;
};

const setSeniority = (stacksArray: Array<string>) => {
  seniority.value = stacksArray;
};

const postJob = () => {
  console.log(seniority.value);

  store.dispatch("postJob", {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    location: location.value,
    stacks: stacks.value,
    seniority: seniority.value,
    status: "",
    imageurl: imageUrl.value,
    expertInSkill: expertInSkill.value,
    skillStartingYear: skillStartingYear.value,
    experienceInSkillFrom: experienceInSkillFrom.value,
    institution: institution.value,
    passingYear: passingYear.value,
    educatedFrom: educatedFrom.value,
    userId: store.state.userId,
  });
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
.post {
  margin: 110px auto 20px auto;
  padding: 20px;
  max-width: 1400px;

  .field-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input {
      width: 49%;
      margin-top: 30px;
    }
  }
  .info-field-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .input {
      width: 32%;
    }
  }

  .heading {
    font-size: 25px;
    margin-top: 20px;
  }

  .form-container {
    width: 90%;
    margin: auto;
    padding: 50px 80px;
    box-shadow: $shadow;
  }

  .drop-down {
    border-radius: 40px;
    overflow: hidden;
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
  }

  .heading {
    font-size: 20px !important;
  }
  .form-container {
    padding: 40px !important;
    width: 95% !important;
  }
}

@media (max-width: 850px) {
  .form-container {
    padding: 30px 20px !important;
  }

  .controls {
    justify-content: space-evenly !important;
  }
  .field-box {
    flex-direction: column;

    .input {
      width: 100% !important;
      margin-top: 0px !important;
    }
  }

  .info-field-box {
    flex-direction: column;

    .input {
      width: 100% !important;
    }
  }
}

@media (max-width: 500px) {
  .post {
    padding: 0px;
    padding-bottom: 45px;
  }
}

@media (max-width: 400px) {
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

<!-- <template>
  <div class="post">
    <v-sheet class="form-container">
      <h1 class="heading text-center mx-8 font-weight-black">Enter Your Details and Post a Job</h1>
      <v-form class="form">
        <div class="field-box">
          <BaseInput
            class="input"
            v-model="location"
            label="Location (Pakistan, Australlia, Iran, United States)"
          />
          <div class="drop-down input bg-input-background">
            <SelectDropDown
              label="Stacks Used"
              :multiple="true"
              :dropDownItems="['Vue js', 'React', 'Angular', 'jQuery']"
              >
              <template #control="stacksArray">
                <v-divider class="mb-2"></v-divider>
                
                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn
                    @click="setStacks(stacksArray)"
                    rounded
                    flat
                      color="primary"
                      >Save</v-btn
                    >
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </div>
          
          <div class="drop-down input bg-input-background">
            <SelectDropDown
              label="Seniority"
              :multiple="true"
              :dropDownItems="['Junior', 'Senior', 'Lead', 'CTO']"
              >
              <template #control="seniority">
                <v-divider class="mb-2"></v-divider>
                
                <v-list-item>
                  <div class="d-flex justify-space-between">
                    <v-btn rounded variant="text" color="primary">Clear</v-btn>
                    <v-btn
                    @click="setSeniority(seniority)"
                    rounded
                    flat
                    color="primary"
                    >Save</v-btn
                    >
                  </div>
                </v-list-item>
              </template>
            </SelectDropDown>
          </div>
        </div>
        <h1 class="heading">Experiences</h1>
        <div class="field-box">
          <BaseInput class="input" v-model="expertInSkill" label="Skilled in" />
          <BaseInput
            class="input"
            v-model="skillStartingYear"
            type="date"
            label="Starting year of skill"
          />
          <BaseInput
            class="input"
            v-model="experienceInSkillFrom"
            label="Learn Skilled from"
            />
        </div>
        <h1 class="heading">Education</h1>
        <div class="field-box">
          <BaseInput class="input" v-model="institution" label="Institution" />
          <BaseInput
          class="input"
            v-model="passingYear"
            type="date"
            label="Passing year"
            />
          <BaseInput
          class="input"
          v-model="educatedFrom"
          label="Country form which educated"
          />
        </div>
        <input class="my-8" type="file" />
      </v-form>
      <div class="controls my-3">
        <BaseButton class="control-btn" title="Cancel" variant="outlined" />
        <BaseButton
        @click="postJob"
          class="control-btn"
          title="Post"
          variant="flat"
          />
        </div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import store from "@/store/store";
import SelectDropDown from "@/components/SelectDropDown.vue";
import { ref } from "vue";

let firstName = ref("");
let lastName = ref("");
let email = ref("");
let location = ref("");
let imageUrl = ref<string>(
  "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
  );
let stacks = ref<string[]>([]);
let seniority = ref<string[]>([]);

// Experiences
let expertInSkill = ref("");
let skillStartingYear = ref("");
let experienceInSkillFrom = ref("");

// Education
let institution = ref("");
let passingYear = ref("");
let educatedFrom = ref("");

const setStacks = (stacksArray: Array<string>) => {
  stacks.value = stacksArray;
};

const setSeniority = (stacksArray: Array<string>) => {
  seniority.value = stacksArray;
};

const postJob = () => {
  
  store.dispatch("postJob", {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    location: location.value,
    stacks: stacks.value,
    seniority: seniority.value,
    status: "",
    imageurl: imageUrl.value,
    expertInSkill: expertInSkill.value,
    skillStartingYear: skillStartingYear.value,
    experienceInSkillFrom: experienceInSkillFrom.value,
    institution: institution.value,
    passingYear: passingYear.value,
    educatedFrom: educatedFrom.value,
  });
};
</script>

<style scoped lang="scss">
.post {
  margin: 110px auto 20px auto;
  padding: 20px;
  max-width: 1400px;
  
  .field-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    .input {
      width: 32%;
      margin: 10px 0px;
    }
  }
  
  .heading {
    font-size: 25px;
    margin-top: 20px;
  }
  
  .form-container {
    width: 90%;
    margin: auto;
    padding: 50px 80px;
    box-shadow: $shadow;
  }
  
  .drop-down {
    border-radius: 40px;
    height: 56px;
    overflow: hidden;
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
  }

  .heading {
    font-size: 20px !important;
  }
  .form-container {
    padding: 40px !important;
    width: 95% !important;
  }
}

@media (max-width: 850px) {
  .form-container {
    padding: 30px 20px !important;
  }

  .controls {
    justify-content: space-evenly !important;
  }
  .field-box {
    flex-direction: column;

    .input {
      width: 100% !important;
      margin-top: 0px !important;
    }
  }
}

@media (max-width: 500px) {
  .post {
    padding: 0px;
    padding-bottom: 45px;
  }
}

@media (max-width: 400px) {
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
</style> -->
