import { Component, BaseComponent, Prop } from '~/core';
import { City, citiesService } from '~/shared';

import Template from './city-detail.component.html?style=cities/city-detail/city-detail.component.css';

@Template
@Component
export class CityDetailComponent extends BaseComponent {
    public city: City = null;

    @Prop()
    public id: number;

    get mapUrl() {
        return `https://www.bing.com/maps/embed?h=400&w=400&cp=${this.city.centroid[0]}~${this.city.centroid[1]}&lvl=12&typ=s&sty=r&src=SHELL&FORM=MBEDV8`;
    }

    public async created() {
        this.city = await citiesService.getById(this.id);
    }
}
