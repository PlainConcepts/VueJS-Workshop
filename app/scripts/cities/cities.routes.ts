import { RouteConfig } from 'vue-router';
import { CitiesComponent, CityListComponent, CityDetailComponent } from '.';

export let citiesRoutes: RouteConfig[] = [
    {
        path: '/cities',
        name: 'cities',
        component: CitiesComponent,
        children: [
            {
                path: '',
                name: 'city-list',
                component: CityListComponent
            },
            {
                path: ':id',
                name: 'city-detail',
                component: CityDetailComponent,
                props: true
            }
        ]
    }
];