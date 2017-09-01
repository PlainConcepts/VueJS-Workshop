import { Component, BaseComponent } from '~/core';
import { City, citiesService } from '~/shared';
import { CityAddComponent } from '../shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component({
    components: {
        [CityAddComponent.tag]: CityAddComponent
    }
})
export class CityListComponent extends BaseComponent {
    public cities: City[] = null;

    public async created() {
        this.cities = await citiesService.get();
    }

    public remove(id: number) {
        citiesService.remove(id);
    }
}
