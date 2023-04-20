import type { employeesInfoTypes, Messages, UserDetails } from "@/types";
import { ref } from "vue";

const state = {
  employeesInfo: Array<employeesInfoTypes>(),
  shortListedEmployees: Array<employeesInfoTypes>(),
  contactedEmployees: Array<employeesInfoTypes>(),
  interviewingEmployees: Array<employeesInfoTypes>(),
  hiredEmployees: Array<employeesInfoTypes>(),
  employeeInfo: {} as employeesInfoTypes,
  currentUserDetails: {} as UserDetails,
  usersDetails: Array<UserDetails>(),
  userId: ref(""),
  messages: Array<Messages>(),
  bodyPreLoader: false,
};

export default state;
