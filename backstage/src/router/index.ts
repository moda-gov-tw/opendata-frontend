import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "WelcomePage" */ '@/views/WelcomePage.vue'),
    },
    {
      path: '/home',
      name: 'BackstageHome',
      component: () => import(/* webpackChunkName: "HomePage" */ '@/views/HomePage.vue'),
    },
    {
      path: '/layout',
      name: 'LayoutDashboard',
      component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout/Dashboard.vue'),
    },
    {
      path: '/layout/single-article',
      name: 'LayoutSingleArticle',
      component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout/SingleArticle.vue'),
    },
    {
      path: '/layout/single-form',
      name: 'LayoutSingleForm',
      component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout/SingleForm.vue'),
    },
    {
      path: '/layout/two-cols-right-main',
      name: 'LayoutTwoColsRightMain',
      component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout/TwoColsRightMain.vue'),
    },
    {
      path: '/layout/two-cols-left-main',
      name: 'LayoutTwoColsLeftMain',
      component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout/TwoColsLeftMain.vue'),
    },
    {
      path: '/contentadmin/announcement',
      name: 'ContentadminAnnouncement',
      component: () => import(/* webpackChunkName: "Contentadmin" */ '@/views/Contentadmin/Announcement.vue'),
    },
    {
      path: '/dataset',
      name: 'DatasetDashboard',
      component: () => import(/* webpackChunkName: "DatasetProvider" */ '@/views/Dataset/Dashboard.vue'),
    },
    {
      path: '/dataset/provider',
      name: 'DatasetProviderDashboard',
      component: () => import(/* webpackChunkName: "DatasetProvider" */ '@/views/Dataset/Provider/Dashboard.vue'),
    },
    {
      path: '/dataset/provider/dataset-add',
      name: 'DatasetProviderAdd',
      component: () => import(/* webpackChunkName: "DatasetProvider" */ '@/views/Dataset/Provider/DatasetAdd.vue'),
    },
    {
      path: '/dataset/provider/all',
      name: 'DatasetProviderAll',
      component: () => import(/* webpackChunkName: "DatasetProvider" */ '@/views/Dataset/Provider/All.vue'),
    },
    {
      path: '/dataset/detail',
      name: 'DatasetProviderDetail',
      component: () => import(/* webpackChunkName: "DatasetProvider" */ '@/views/Dataset/Provider/Detail.vue'),
    },
  ]
})

export default router
