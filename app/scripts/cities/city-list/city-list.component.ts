import { Component, BaseComponent } from '~/core';
import { City, citiesService } from '~/shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component
export class CityListComponent extends BaseComponent {
    public cities: City[] = null;
    public city: City = null;
    public name = '';

    public async created() {
        this.cities = await citiesService.get();
    }

    public remove(id: number) {
        citiesService.remove(id);
    }

    public async search() {
        if (!this.name) {
            return;
        }
        
        this.city = await citiesService.search(this.name);
    }
}
