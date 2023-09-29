import {createRouter, createWebHashHistory} from "vue-router";

// import component
import Dashboard from "../views/Dashboard.vue"
const mainPage = ()=> import("../components/MainPageComponent.vue")
//end of import component







// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        name:"app",
        //lazy routing
        components: {
            default: mainPage,
            topbar: ()=> import("../components/TopbarComponent.vue")
        },
        children:[
            {
                path:"",
                name:"dashboard",
                component: Dashboard
            }
        ]
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;
