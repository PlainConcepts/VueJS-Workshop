import { Component, BaseComponent, Tag } from '~/core';
import { City, citiesService } from '~/shared';

import Template from './city-add.component.html?style=cities/shared/city-add/city-add.component.css';

@Template
@Tag('city-add')
@Component
export class CityAddComponent extends BaseComponent {
    public city: City = null;
    public name = '';

    public async search() {
        if (!this.name) {
            return;
        }
        
        this.city = await citiesService.search(this.name);
    }
}
