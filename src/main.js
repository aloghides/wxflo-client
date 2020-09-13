import { module } from 'angular';

const tachyons = require('tachyons/css/tachyons.css')

//Components
import AppComponent from './components/app/index';
import NavComponent from './components/nav/index'
import SearchComponent from './components/search/index';
import CurrentWeatherComponent from './components/current/index';
import HourlyWeatherComponent from './components/hourly/index';
import ForecastWeatherComponent from './components/forecast/index';

//Services
import WeatherService from './services/weather.service';
import ForecastService from './services/forecast.service';
import HourlyService from './services/hourly.service';
import ObservationService from './services/observation.service';
import GeolocationService from './services/geolocation.service';

module('wxflo-client', [])
        .service('weather', WeatherService)
        .service('forecast', ForecastService)
        .service('hourly', HourlyService)
        .service('observation', ObservationService)
        .service('geolocation', GeolocationService)
        .component('app', AppComponent)
        .component('nav', NavComponent)
        .component('search', SearchComponent)
        .component('forecastWeather', ForecastWeatherComponent)
        .component('currentWeather', CurrentWeatherComponent)
        .component('hourlyWeather', HourlyWeatherComponent);