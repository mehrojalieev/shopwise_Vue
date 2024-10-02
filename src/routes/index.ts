import { createRouter, createWebHistory } from "vue-router";


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomePage.vue")
        }
    ]
})


export default routes