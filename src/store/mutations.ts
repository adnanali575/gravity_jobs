import type { employeesInfoTypes, Messages, State, UserDetails } from "@/types";

export default {
  SetGetData: (state: State, payload: Array<employeesInfoTypes>) => {
    console.log(payload);
    state.employeesInfo = payload;
  },

  setUsersDetails: (state: State, payload: UserDetails) => {
    state.usersDetails.push(payload);
  },

  setShowProfile: (state: State, payload: employeesInfoTypes) => {
    state.employeeInfo = payload;
  },

  setCurrentUserDetails: (state: State, payload: UserDetails) => {
    state.currentUserDetails = payload;
    state.userId = payload.userId;
  },

  SetShortlistEmployees: (state: State, payload: employeesInfoTypes) => {
    state.shortListedEmployees.push(payload);
  },

  SetContactedEmployees: (state: State, payload: employeesInfoTypes) => {
    state.contactedEmployees.push(payload);
  },

  setInterviewingEmployees: (state: State, payload: employeesInfoTypes) => {
    state.interviewingEmployees.push(payload);
  },

  setHiredEmployees: (state: State, payload: employeesInfoTypes) => {
    state.hiredEmployees.push(payload);
  },

  // Messaging Section ------------------

  setMessages: (state: State, payload: Messages) => {
    state.messages.push(payload);
  },
};
