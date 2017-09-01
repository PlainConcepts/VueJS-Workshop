import { Component, BaseComponent, Prop } from '~/core';
import { City, Weather, WeatherAstronomy, WeatherCodes, WeatherIcons, citiesService } from '~/shared';
import { weatherService } from '../shared';

import Template from './weather-detail.component.html?style=weather/weather-detail/weather-detail.component.css';

@Template
@Component
export class WeatherDetailComponent extends BaseComponent {
    public city: City = null;

    @Prop()
    public id: number;

    public async created() {
        this.city = await citiesService.getById(this.id);
        this.city.weather = await weatherService.get(this.city);
    }

    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
