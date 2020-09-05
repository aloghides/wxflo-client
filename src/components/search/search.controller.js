//45,-92 stillwater
//36,-115 vegas

class SearchController{
    constructor(){
        
    }
    updateWeather(){
        //console.log(this.location);
        const payload = {
            event: {
                location: this.location
            } 
        }
        //console.log(payload);
        this.onSearch(payload);
    }
}

SearchController.$inject = [];

export default SearchController;