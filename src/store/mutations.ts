import type { EmployeesInfoTypes, Messages, State, UserDetails } from "@/types";

export default {
  SetGetData: (state: State, payload: Array<EmployeesInfoTypes>) => {
    state.employeesInfo = payload;
  },

  setUsersDetails: (state: State, payload: UserDetails) => {
    state.usersDetails.push(payload);
  },

  setShowProfile: (state: State, payload: EmployeesInfoTypes) => {
    state.employeeInfo = payload;
  },

  setCurrentUserDetails: (state: State, payload: UserDetails) => {
    state.currentUserDetails = payload;
    state.userId = payload.userId;
  },

  SetShortlistEmployees: (state: State, payload: EmployeesInfoTypes) => {
    state.shortListedEmployees.push(payload);
  },

  SetContactedEmployees: (state: State, payload: EmployeesInfoTypes) => {
    state.contactedEmployees.push(payload);
  },

  setInterviewingEmployees: (state: State, payload: EmployeesInfoTypes) => {
    state.interviewingEmployees.push(payload);
  },

  setHiredEmployees: (state: State, payload: EmployeesInfoTypes) => {
    state.hiredEmployees.push(payload);
  },

  // Messaging Section ------------------
  setMessages: (state: State, payload: Messages) => {
    state.messages.push(payload);
  },
};
