import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: resolve => require(['../views/index/index.vue'], resolve)
        },
        {
            path: '/operation',
            component: resolve => require(['../views/operation/index.vue'], resolve)
        },
        {
            path: '/people',
            component: resolve => require(['../views/people/index.vue'], resolve)
        },
        {
            path: '/place',
            component: resolve => require(['../views/place/index.vue'], resolve)
        },
        {
            path: '/case',
            component: resolve => require(['../views/case/index.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
