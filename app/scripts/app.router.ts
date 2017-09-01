import VueRouter from 'vue-router';
import { Vue } from 'vue-property-decorator';

Vue.use(VueRouter);

export function router() {
    let router: VueRouter;

    router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
            }
        ]
    });

    return router;
}