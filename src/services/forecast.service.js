const base = 'http://localhost:8080/forecast';

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

//currently gets only 7day