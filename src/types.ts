export type State = {
  employeesInfo: Array<EmployeesInfoTypes>;
  shortListedEmployees: Array<EmployeesInfoTypes>;
  contactedEmployees: Array<EmployeesInfoTypes>;
  interviewingEmployees: Array<EmployeesInfoTypes>;
  hiredEmployees: Array<EmployeesInfoTypes>;
  employeeInfo: object;
  currentUserDetails: UserDetails;
  usersDetails: Array<UserDetails>;
  messages: Array<Messages>;
  chatUsers: Array<ChatUser>;
  notifications: Array<Notifications>;
  chatUser: object;
  employeeToTerminate: object;
  searchLoader: boolean;
  searchBarLoader: boolean;
  success: boolean;
  shortListLoader: boolean;
  contactLoader: boolean;
  interviewLoader: boolean;
  hireLoader: boolean;
  chatListLoader: boolean;
  forgotPasswordLoader: boolean;
  signInLoader: boolean;
  signUpLoader: boolean;
  cardButtonLoader: boolean;
  profileLoader: boolean;
  accountUpdateLoader: boolean;
  formSubmitted: boolean;
  error: boolean;
  errorMessage: string;
};

export type Notifications = {
  date: Date;
  imageUrl: string;
  notiId: string;
  message: string;
  userName: string;
  minutes: number;
  hours: number;
};

export type SignUpObject = {
  firstName: string;
  lastName: string;
  companyName: string;
  imageUrl: string;
  role: string;
  noOfRecrutement: string;
  email: string;
  phone: string;
  password: string;
  userId: string;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  companyName: string;
  role: string;
  noOfRecrutement: string;
  notificatonsSeen: boolean;
  email: string;
  phone: string;
  password: string;
  userId: string;
};

export type ChatUser = {
  userId: string;
  firstName: string;
  imageUrl: string;
  lastMessage: string;
  lastMessageTime: Date;
  lastName: string;
  hours: number;
  minutes: number;
};

export type JobPostingObject = {
  [x: string]: any;
  userId: any;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  stacks: Array<string>;
  seniority: Array<string>;
  imageUrl: string;
  expertInSkill: string;
  skillStartingYear: Date;
  experienceInSkillFrom: string;
  institution: string;
  passingYear: Date;
  educatedFrom: string;
  date: Date;
};

export type EmployeesInfoTypes = {
  educatedFrom: string;
  email: string;
  experienceInSkillFrom: string;
  expertInSkill: string;
  firstName: string;
  imageUrl: string;
  institution: string;
  lastName: string;
  location: string;
  passingYear: Date | number;
  passingMonth: number;
  experienceTitle: string;
  seniority: string[] | string;
  skillStartingYear: Date | number;
  skillStartingMonth: number;
  stacks: string[];
  status: string;
  docId: string;
  loading: boolean;
  confirmTermination: boolean;
  userId: string;
};

export type Messages = {
  userName: string;
  imageUrl: string;
  text: string;
  date: Date;
  senderId: string;
  receiverId: string;
  hours: number;
  minutes: number;
  seen: boolean;
};
