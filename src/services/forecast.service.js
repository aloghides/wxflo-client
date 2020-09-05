const base = 'https://desolate-escarpment-25315.herokuapp.com/forecast';

class ForecastService{
    constructor ($http){
        this.$http = $http;
    }
    get(location){
        const url = `${base}/${location}`;
        return this.$http.get(url)
                            .then(response => response.data);
    }
}

ForecastService.$inject =  ['$http'];

export default ForecastService;