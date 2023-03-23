import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import ShortList from "@/views/ShortList.vue";
import Shortlisted from "@/components/shortlisted.vue";
import Contacted from "@/components/contacted.vue";
import Interviewing from "@/components/Interviewing.vue";
import Hired from "@/components/Hired.vue";
import Chat from "@/views/Chat.vue";
import Profile from "@/views/Profile.vue";

import SignIn from '@/views/SignIn.vue'
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import ResetConfirm from "@/views/ResetConfirm.vue";
import SignUp from '@/views/SignUp.vue'

import Account from '@/views/Account.vue'

import NavBar from "@/components/NavBar.vue";
import SearchHeader from '@/components/Header.vue'
import ShortListHeader from '@/components/ShortlistHeader.vue'
import BottomNavBar from '@/components/BottomBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/search",
      components: {
        default: Search,
        NavBar: NavBar,
        header: SearchHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/shortlist",
      components: {
        default: ShortList,
        NavBar: NavBar,
        header: ShortListHeader,
        BottomNavBar: BottomNavBar,
      },
      children: [
        { path: "", component: Shortlisted },
        { path: "contacted", component: Contacted },
        { path: "interviewing", component: Interviewing },
        { path: "hired", component: Hired },
      ],
    },
    { path: "/chat", 
    components: {
      default: Chat,
      NavBar: NavBar,
      header: SearchHeader,
      BottomNavBar: BottomNavBar,
    },
   },
    { path: "/profile",
    components: {
      default: Profile,
      NavBar: NavBar,
      header: SearchHeader,
      BottomNavBar: BottomNavBar,
    }, 
   },
   {path: '/sign-in', name: 'SIgnIn', component: SignIn},
   {path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
   {path: '/reset-password', name: 'ResetPassword', component: ResetPassword},
   {path: '/reset-confirm', name: 'ResetConfirm', component: ResetConfirm},
   {path: '/sign-up', name: 'SignUp', component: SignUp},
   {
    path: "/account",
    components: {
      default: Account,
      NavBar: NavBar,
      header: SearchHeader,
      BottomNavBar: BottomNavBar,
    },
  },
  ],
});

export default router;
