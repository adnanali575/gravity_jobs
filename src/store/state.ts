import type { EmployeesInfoTypes, Messages, UserDetails } from "@/types";
import { ref } from "vue";

const state = {
  employeesInfo: Array<EmployeesInfoTypes>(),
  shortListedEmployees: Array<EmployeesInfoTypes>(),
  contactedEmployees: Array<EmployeesInfoTypes>(),
  interviewingEmployees: Array<EmployeesInfoTypes>(),
  hiredEmployees: Array<EmployeesInfoTypes>(),
  employeeInfo: {} as EmployeesInfoTypes,
  currentUserDetails: {} as UserDetails,
  usersDetails: Array<UserDetails>(),
  userId: ref(""),
  messages: Array<Messages>(),
  bodyPreLoader: false,
};

export default state;
