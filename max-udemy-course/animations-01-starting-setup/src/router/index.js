import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from '../pages/AllUsers.vue';
import CourseGoals from '../pages/CourseGoals.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});
