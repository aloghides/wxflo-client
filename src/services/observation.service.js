const base = 'https://desolate-escarpment-25315.herokuapp.com/obs/location';

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