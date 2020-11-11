import Vue from 'vue'
import VueRouter from 'vue-router'


import Start from '../views/start/Start.vue'
import Step1 from '../views/step-1/Step-1.vue'
import Step2 from '../views/step-2/Step-2.vue'
import Step3 from '../views/step-3/Step-3.vue'
import Step4 from '../views/step-4/Step-4.vue'
import Step5 from '../views/step-5/Step-5.vue'
import Step6 from '../views/step-6/Step-6.vue'
import Step7 from '../views/step-7/Step-7.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/step-1',
        name: 'Step1',
        component: Step1
    },
    {
        path: '/step-2',
        name: 'Step2',
        component: Step2
    },
    {
        path: '/step-3',
        name: 'Step3',
        component: Step3
    },
    {
        path: '/step-4',
        name: 'Step4',
        component: Step4
    },
    {
        path: '/step-5',
        name: 'Step5',
        component: Step5
    },
    {
        path: '/step-6',
        name: 'Step6',
        component: Step6
    },
    {
        path: '/step-7',
        name: 'Step7',
        component: Step7
    }

]

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'is-active',
})

router.beforeEach((to, from, next) => {
    if (!from.name && to.path !== '/') next({ name: 'Start' })
    else next()
})

export default router