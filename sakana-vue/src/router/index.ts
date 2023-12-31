import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRouteItems } from "./routes"

const allRoutes = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: basicRouteItems,
})

// config router
export function setupRouter(app: App<Element>) {
    app.use(allRoutes as any);
}
