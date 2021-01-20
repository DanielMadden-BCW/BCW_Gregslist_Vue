import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
import HousesPage from '../pages/HousesPage.vue'
import JobsPage from '../pages/JobsPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/cars',
      name: 'Cars',
      component: CarsPage
    }, {
      path: '/cars/:id',
      name: 'CarDetails',
      component: CarDetailsPage
    }, {
      path: '/houses',
      name: 'Houses',
      component: HousesPage
    }, {
      path: '/houses/:id',
      name: 'HouseDetails',
      component: HouseDetailsPage
    }, {
      path: '/jobs',
      name: 'Jobs',
      component: JobsPage
    }, {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetailsPage
    }
  ]
})

export default router
