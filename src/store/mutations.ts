import type {
  ChatUser,
  EmployeesInfoTypes,
  Messages,
  Notifications,
  State,
  UserDetails,
} from "@/types";

export default {
  setCandidatesData: (state: State, payload: EmployeesInfoTypes) => {
    state.employeesInfo.push(payload);
  },

  setUsersDetails: (state: State, payload: UserDetails) => {
    state.usersDetails.push(payload);
  },

  setShowProfile: (state: State, payload: EmployeesInfoTypes) => {
    state.employeeInfo = payload;
  },

  setCurrentUserDetails: (state: State, payload: UserDetails) => {
    state.currentUserDetails = payload;
  },

  setNotifications: (state: State, payload: Notifications) => {
    state.notifications.push(payload);
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

  setEmployeeToTerminate: (state: State, payload: EmployeesInfoTypes) => {
    state.employeeToTerminate = payload;
  },

  // Messaging Section ------------------
  setMessages: (state: State, payload: Messages) => {
    state.messages.push(payload);
  },
  setChatUsers: (state: State, payload: ChatUser) => {
    state.chatUsers.push(payload);
  },
  setCurrentChatUser: (state: State, payload: ChatUser) => {
    state.chatUser = payload;
  },
};
