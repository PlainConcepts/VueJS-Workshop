import { Component, BaseComponent } from '~/core';
import { City, Weather, WeatherAstronomy, WeatherCodes, WeatherIcons, citiesService } from '~/shared';
import { weatherService } from '~/weather/shared';

import Template from './weather-list.component.html?style=weather/weather-list/weather-list.component.css';

@Template
@Component
export class WeatherListComponent extends BaseComponent {
    public cities: City[] = null;

    public async created() {
        this.cities = await citiesService.get();
        this.cities.forEach(async city => {
            city.weather = await weatherService.get(city);
        });
    }

    public goToCity(id: string) {
        this.$router.push({
            name: 'weather-detail',
            params: {
                id: id
            }
        });
    }

    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
