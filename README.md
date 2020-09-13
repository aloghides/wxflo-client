This web client was created with AngularJS 1.8, Tachyons, and Webpack. See example on my Github Pages:  https://aloghides.github.io/wxflo-client/
The backend was created using Node.JS and Express. https://github.com/aloghides/wxflo-proxy/
All of the weather data is sourced from the NWS API https://github.com/weather-gov/api which is their new REST-style, JSON based service instead of the old xml service.
All of the mapping and geocoding is sourced from the mapbox API using their node module: https://www.npmjs.com/package/mapbox 

While the data in this site is sourced from the US National Weather Service API, this api is considered non operational and this website is experimental in nature.
For official forecasts please visit https://www.weather.gov/

Shout out to https://github.com/justin1dennison/ and ITPRO.TV for the inspiration and help learning the languages and frameworks.  I've adapted what I learned in their course on AnguarlJS and Express to put together a site that sources data from the NWS and Mapbox rather than Darksky (which closed their API) and GoogleMapsAPI.

Next goal is to recreate this in Angular 2.0