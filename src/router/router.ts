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
import FormSubmitted from '@/components/FormSubmitted.vue'

import SideBar from "@/components/SideBar.vue";
import SearchHeader from "@/components/SearchHeader.vue";
import ShortListHeader from "@/components/ShortlistHeader.vue";
import CustomHeader from "@/components/CustomHeader.vue";
import BottomNavBar from "@/components/BottomBar.vue";
import ChatWindow from "@/components/ChatWindow.vue";

import { ref } from "vue";
import store from "@/store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/search/:id",
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
      children: [{ path: ":id", name: 'Chat', component: ChatWindow }],
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      meta: { auth: false },
      component: ForgotPassword,
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      meta: { auth: false },
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
    {
      path: "/reset-confirm",
      name: "ResetConfirm",
      meta: { auth: false },
      component: ResetConfirm,
    },
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
      path: "/submitted",
      name: "Submitted",
      meta: { auth: true },
      components: {
        default: FormSubmitted,
        SideBar: SideBar,
        header: CustomHeader,
        BottomNavBar: BottomNavBar,
      },
    },
    {
      path: "/post-job",
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  const auth = getAuth();
  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, resolve);
  });
  const isAuthenticated = !!user;

  if (requiresAuth && !isAuthenticated) {
    next("/sign-in");
  } else if (isAuthenticated && to.name === "SignIn") {
    next("/");
  } else if (isAuthenticated && requiresAuth) {
    next();
  } else if (!isAuthenticated && requiresAuth) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
