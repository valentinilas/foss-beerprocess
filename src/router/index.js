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
import Step1Talk from '../views/step-1-talk/Step-1-talk.vue'
import Step2Talk from '../views/step-2-talk/Step-2-talk.vue'
import Step3Talk from '../views/step-3-talk/Step-3-talk.vue'
import Step4Talk from '../views/step-4-talk/Step-4-talk.vue'
import Step5Talk from '../views/step-5-talk/Step-5-talk.vue'
import Step6Talk from '../views/step-6-talk/Step-6-talk.vue'
import Step7Talk from '../views/step-7-talk/Step-7-talk.vue'
import Step8 from '../views/step-8-testimonial/Step-8-testimonial.vue' // testimonial
import Step9 from '../views/step-9-water/Step-9-water.vue' // watering hole
import Step3TalkHowTo from '../views/step-3-talk-howto/Step-3-talk-howto.vue' // watering hole

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
    },
    {
        path: '/step-1-talk',
        name: 'Step1Talk',
        component: Step1Talk
    },
    {
        path: '/step-2-talk',
        name: 'Step2Talk',
        component: Step2Talk
    },
    {
        path: '/step-3-talk',
        name: 'Step3Talk',
        component: Step3Talk
    },
    {
        path: '/step-4-talk',
        name: 'Step4Talk',
        component: Step4Talk
    },
    {
        path: '/step-5-talk',
        name: 'Step5Talk',
        component: Step5Talk
    },
    {
        path: '/step-6-talk',
        name: 'Step6Talk',
        component: Step6Talk
    },
    {
        path: '/step-7-talk',
        name: 'Step7Talk',
        component: Step7Talk
    },
    {
        path: '/step-8',
        name: 'Step8',
        component: Step8
    },
    {
        path: '/step-9',
        name: 'Step9',
        component: Step9
    },
    {
        path: '/step-3-talk-howto',
        name: 'Step3TalkHowTo',
        component: Step3TalkHowTo
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