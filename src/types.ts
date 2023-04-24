export type State = {
  employeesInfo: Array<EmployeesInfoTypes>;
  shortListedEmployees: Array<EmployeesInfoTypes>;
  contactedEmployees: Array<EmployeesInfoTypes>;
  interviewingEmployees: Array<EmployeesInfoTypes>;
  hiredEmployees: Array<EmployeesInfoTypes>;
  employeeInfo: object;
  currentUserDetails: object;
  usersDetails: Array<UserDetails>;
  userId: string;
  messages: Array<Messages>;
  logInLogOutAlert: boolean;
};

export type SignUpObject = {
  firstName: string;
  lastName: string;
  companyName: string;
  role: string;
  noOfRecrutement: string;
  email: string;
  phone: string;
  password: string;
  shortlisted: Array<string>;
  contacted: Array<string>;
  interviewing: Array<string>;
  hired: Array<string>;
  userId: string;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  lastMessage: string;
  userProfile: string;
  companyName: string;
  role: string;
  noOfRecrutement: string;
  email: string;
  phone: string;
  password: string;
  userId: string;
  shortlisted: Array<string>;
  contacted: Array<string>;
  interviewing: Array<string>;
  hired: Array<string>;
};

export type JobPostingObject = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  stacks: Array<string>;
  seniority: Array<string>;
  imageUrl: string;
  expertInSkill: string;
  skillStartingYear: string;
  experienceInSkillFrom: string;
  institution: string;
  passingYear: string;
  educatedFrom: string;
  date: Date;
};

export type EmployeesInfoTypes = {
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
  docId: string;
  userId: string;
};

export type Messages = {
  userName: string;
  userProfile: string;
  text: string;
  date: Date;
  senderId: string;
  receiverId: string;
  hours: number;
  minutes: number;
  seen: boolean;
};
