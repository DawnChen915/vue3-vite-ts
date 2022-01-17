import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'
import Home from '@/views/GithubNum.vue'
import HelloWorld from '@/components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Home
    },
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path:'/test',
        name:'test',
        component:()=>import('@/views/parentPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
