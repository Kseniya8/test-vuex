import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/UsersList.vue'
import SpecificUser from '../views/SpecificUser.vue'

const routes = [
  {
    path: '/',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/user/:id',
    name: 'details',
    component: SpecificUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
