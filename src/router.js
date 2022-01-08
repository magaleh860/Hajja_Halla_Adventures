import {createRouter, createWebHistory}  from 'vue-router';

const routes = [
  {
    path:'/',
    name:"Welcome",
    component:()=>import('./components/Welcome.vue')
  }
  ,
  {
    path:'/mainmenu',
    name:"MainMenu",
    component:()=>import('./components/MainMenu.vue')
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;