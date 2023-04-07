export type signUpObject = {
    firstName?: string,
    lastName?: string,
    companyName?: string,
    role?: string,
    noOfRecrutement?: string,
    email?: string,
    phone?: string,
    password?: string,
}

export type jobPostingObject = {
    firstName: string,
    lastName: string,
    email: string,
    location: string,
    stacks: Array<string>,
    seniority: Array<string>,
    status: string | undefined,
    imageUrl: string,
    expertInSkill: string,
    skillStartingYear: string,
    experienceInSkillFrom: string,
    institution: string,
    passingYear: string,
    educatedFrom: string,
  }

  export type employeesInfoTypes = {
    educatedFrom: string;
    email: string;
    experienceInSkillFrom: string;
    expertInSkill: string;
    firstName: string;
    imageurl: string;
    institution: string;
    lastName: string;
    location: string;
    passingYear: string;
    seniority: string[];
    skillStartingYear: string;
    stacks: string[];
    status: string;
  }