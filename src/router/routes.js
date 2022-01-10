const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },

  // /auth/login

  {
    path: "/auth",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },
];

export default routes;
