import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import ShortList from "@/views/ShortList.vue";
import Shortlisted from "@/components/ShortListed.vue";
import Contacted from "@/components/contacted.vue";
import Interviewing from "@/components/Interviewing.vue";
import Hired from "@/components/Hired.vue";
import Chat from "@/views/Chat.vue";
import Profile from "@/views/Profile.vue";
import Introduction from "@/views/Introduction.vue";

import SignIn from "@/views/SignIn.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import ResetConfirm from "@/views/ResetConfirm.vue";
import SignUp from "@/views/SignUp.vue";
import Account from "@/views/Account.vue";
import Post from "@/views/post.vue";

import Test from "@/views/test.vue";

import SideBar from "@/components/SideBar.vue";
import SearchHeader from "@/components/SearchHeader.vue";
import ShortListHeader from "@/components/ShortlistHeader.vue";
import CustomHeader from "@/components/CustomHeader.vue";
import BottomNavBar from "@/components/BottomBar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/test", name: "test", component: Test },
    {
      path: "/",
      name: "Introduction",
      component: Introduction,
      meta: { auth: true },
    },
    {
      path: "/search",
      name: "Search",
      meta: { auth: true },
      components: {
        default: Search,
        SideBar: SideBar,
        header: SearchHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/shortlist",
      name: "shortlist",
      meta: { auth: true },
      components: {
        default: ShortList,
        SideBar: SideBar,
        header: ShortListHeader,
        BottomNavBar: BottomNavBar,
      },
      children: [
        { path: "", name: "ShortListed", component: Shortlisted },
        { path: "contacted", component: Contacted },
        { path: "interviewing", component: Interviewing },
        { path: "hired", component: Hired },
      ],
    },
    {
      path: "/chat",
      name: "Chat",
      meta: { auth: true },
      components: {
        default: Chat,
        SideBar: SideBar,
        header: CustomHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      meta: { auth: true },
      components: {
        default: Profile,
        SideBar: SideBar,
        header: SearchHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      component: ResetPassword,
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: SignIn,
      meta: { auth: false },
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp,
      meta: { auth: false },
    },
    { path: "/reset-confirm", name: "ResetConfirm", component: ResetConfirm },
    {
      path: "/account-settings",
      name: "AccountSettings",
      meta: { auth: true },
      components: {
        default: Account,
        SideBar: SideBar,
        header: CustomHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/post",
      name: "Post",
      meta: { auth: true },
      components: {
        default: Post,
        SideBar: SideBar,
        header: CustomHeader,
        BottomNavBar: BottomNavBar,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const auth = getAuth();
//   const requiresAuth = to.matched.some(record => record.meta.auth);

//   // If the route requires authentication
//   if (requiresAuth) {
//     // Check if the user is authenticated
//     if (auth.currentUser) {
//       next();
//     } else {
//       // Redirect the user to the login page
//       next('/sign-in');
//     }
//   } else {
//     // If the user is authenticated and trying to access the sign-in page, redirect to the root page
//     if (to.name === 'SignIn' && auth.currentUser) {
//       next('/');
//     } else {
//       next();
//     }
//   }
// });

export default router;
