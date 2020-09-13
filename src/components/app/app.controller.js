//45.0493,-92.8423 stillwater
//36,-115 vegas

class AppController{
    constructor(weather, geolocation){
        this.weather = weather;
        this.location = '';
        this.geolocation = geolocation;
    }
    $onInit(){
        this.geolocation.getPosition()
                    .then(coordinates => {
                        const {latitude, longitude} = coordinates;
                        return this.weather.get(latitude, longitude);
                    })
                    .then(response => {
                        this.weatherData = response;
                        this.location = `${response.meta.properties.relativeLocation.properties.city}, ${response.meta.properties.relativeLocation.properties.state}`;
                    })
                    .catch(err => console.error('App', err));

    }
    onSearch({location}){
        this.location = location;
        this.weather.getByLocation(location).then(response => this.weatherData = response)
                                    .then(() => console.log(this.weatherData))
                                    .catch(err => console.error(err));
    }
}


AppController.$inject = ['weather', 'geolocation']

export default AppController;