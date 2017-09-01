import { RouteConfig } from 'vue-router';
import { WeatherComponent, WeatherListComponent, WeatherDetailComponent } from '.';

export let weatherRoutes: RouteConfig[] = [
    {
        path: '/weather',
        name: 'weather',
        component: WeatherComponent,
        children: [
            {
                path: '',
                name: 'weather-list',
                component: WeatherListComponent
            },
            {
                path: ':id',
                name: 'weather-detail',
                component: WeatherDetailComponent,
                props: true
            }
        ]
    }
];