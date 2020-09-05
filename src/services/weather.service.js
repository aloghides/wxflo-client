const base = 'https://desolate-escarpment-25315.herokuapp.com/weather/location';
const posbase = 'https://desolate-escarpment-25315.herokuapp.com/weather/position';

class WeatherService{
    constructor ($http){
        this.$http = $http;
    }
    get(lat, lon){
        const url = `${posbase}/${lat},${lon}`;
        return this.$http.get(url)
                            .then(response => response.data);
    }
    getByLocation(location){
        const url = `${base}/${location}`;
        return this.$http.get(url)
                            .then(response => response.data);
    }
}

WeatherService.$inject =  ['$http'];

export default WeatherService;