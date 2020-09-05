import controller from './forecast.controller';
import template from './forecast.html';

const component = {
    controller: controller,
    template: template,
    bindings: {
        weatherData: '<'
    }
};

export default component;