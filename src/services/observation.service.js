const base = 'http://localhost:8080/obs/location';

class ObservationService{
    constructor ($http){
        this.$http = $http;
    }
    get(location){
        const url = `${base}/${location}`;
        return this.$http.get(url)
                            .then(response => response.data);
    }
}

ObservationService.$inject =  ['$http'];

export default ObservationService;