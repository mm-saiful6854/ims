import { createRouter, createWebHistory } from 'vue-router'

import Category from "@/views/Category.vue";
import SingleProduct from "@/components/Product/SingleProduct.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Register.vue";
import PasswordForget from "@/views/PasswordForget.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Products from "@/views/Products.vue";
import CreateProduct from "@/components/Product/CreateProduct.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //login and registration
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/password-forget',
      name: 'password-forget',
      component: PasswordForget
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordReset
    },
    //end login and registration
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id', // Dynamic route parameter for product ID
      name: 'productDetails',
      component: SingleProduct
    },
    {
      path: '/product-create',
      name: 'product-create',
      component: CreateProduct
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
  ]
})

export default router
