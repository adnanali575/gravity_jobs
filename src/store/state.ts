import type { employeesInfoTypes, jobPostingObject } from "@/types";
import { ref } from "vue";

const state = {
  employeesInfo: Array<employeesInfoTypes>(),
  shortListedEmployees: Array<employeesInfoTypes>(),
  contactedEmployees: Array<employeesInfoTypes>(),
  interviewingEmployees: Array<employeesInfoTypes>(),
  hiredEmployees: Array<employeesInfoTypes>(),
  employeeInfo: {} as employeesInfoTypes,

  logInLogOutAlert: ref(false),
};

export default state;
