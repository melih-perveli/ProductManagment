import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/productlist",
    name: "ProductList",
    component: () => import("./components/ProductList"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddProduct"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
