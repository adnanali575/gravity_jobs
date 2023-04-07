import type { employeesInfoTypes } from "@/types";

export default {
  SetGetData: (state:any, payload: employeesInfoTypes) => {
    state.employeesInfo.push(payload);
  },

  setShowProfile: (state: any, payload:employeesInfoTypes)=>{
    state.employeeInfo = payload
  },

  SetGetShortlistEmployees: (state: any, payload: employeesInfoTypes) => {
    state.shortListedEmployees.push(payload);
  },

  SetGetContactedEmployees: (state: any, payload: employeesInfoTypes) => {
    state.contactedEmployees.push(payload);
  },

  setGetInterviewingEmployees: (state: any, payload: employeesInfoTypes) => {
    state.interviewingEmployees.push(payload);
  },

  setGetHiredEmployees: (state: any, payload: employeesInfoTypes) => {
    state.hiredEmployees.push(payload);
  },
};
