import { EXCEPTION_COMPONENT, PAGE_NOT_FOUND_NAME, E404_COMPONENT } from '/@/router/constant';

export const basicRouteItems = [
    { path: '/', name: 'Home', component: () => import('/@/pages/index.vue') },
    { path: '/vue3tree', name: 'DatePicker', component: () => import('/@/pages/Vue3Tree.vue') },
    { path: '/vuetree', name: 'Tree', component: () => import('/@/pages/VueTree.vue') },
    { path: '/index', name: 'Index', component: () => import('/@/pages/index.vue') },
    { path: '/404', name: '404Page', component: E404_COMPONENT },
    { path: '/:path(.*)*', name: PAGE_NOT_FOUND_NAME, component: EXCEPTION_COMPONENT, }
]