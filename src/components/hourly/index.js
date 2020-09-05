import controller from './hourly.controller';
import template from './hourly.html';

const component = {
    controller: controller,
    template: template,
    bindings: {
        weatherData: '<'
    }
};

export default component;