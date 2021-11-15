import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/piaf`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "single",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/single")
      } , 

      {
        path: "piaf",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/piaf"),
        redirect: `${adminRoot}/piaf/Point1`,
        children: [
           

          
          {
            path: 'Point1',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point1')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point2',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point2')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point3',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point3')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point4',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point4')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point5',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point5')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point6',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point6')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point7',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point7')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point8',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point8')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point9',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point9')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point10',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point10')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point11',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point11')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point12',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point12')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point13',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point13')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point14',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point14')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point15',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point15')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point16',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point16')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point17',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point17')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point18',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point18')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'Point19',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Point19')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }

        ]
      },
      {
        path: "second-menu",
        component: () =>
          import(/* webpackChunkName: "second-menu" */ "./views/app/second-menu"),
        redirect: `${adminRoot}/second-menu/second`,
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "piaf" */ './views/app/second-menu/Second') }
        ]
      },


       
     
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
