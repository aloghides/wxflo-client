const base = 'http://localhost:8080/hourly';

class HourlyService{
    constructor ($http){
        this.$http = $http;
    }
    get(location){
        const url = `${base}/${location}`;
        return this.$http.get(url)
                            .then(response => response.data);
    }
}

HourlyService.$inject =  ['$http'];

export default HourlyService;