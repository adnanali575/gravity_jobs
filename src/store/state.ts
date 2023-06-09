import type {
  ChatUser,
  EmployeesInfoTypes,
  Messages,
  Notifications,
  UserDetails,
} from "@/types";

const state = {
  employeesInfo: [] as Array<EmployeesInfoTypes>,
  shortListedEmployees: [] as Array<EmployeesInfoTypes>,
  contactedEmployees: [] as Array<EmployeesInfoTypes>,
  interviewingEmployees: [] as Array<EmployeesInfoTypes>,
  hiredEmployees: [] as Array<EmployeesInfoTypes>,
  usersDetails: [] as Array<UserDetails>,
  messages: [] as Array<Messages>,
  employeeInfo: {} as EmployeesInfoTypes,
  currentUserDetails: {} as UserDetails,
  chatUsers: [] as Array<ChatUser>,
  notifications: [] as Array<Notifications>,
  chatUser: {} as ChatUser,
  employeeToTerminate: {} as EmployeesInfoTypes,
  bodyPreLoader: false,
  searchLoader: false,
  searchBarLoader: false,
  chats: true,
  success: false,
  shortListLoader: false,
  contactLoader: false,
  interviewLoader: false,
  hireLoader: false,
  chatListLoader: false,
  confirmTermination: false,
  signInLoader: false,
  signUpLoader: false,
  forgotPasswordLoader: false,
  cardButtonLoader: false,
  profileLoader: false,
  accountUpdateLoader: false,
  formSubmitted: false,
  error: false,
  errorMessage: 'Some went wrong! Please try again',
};

export default state;
