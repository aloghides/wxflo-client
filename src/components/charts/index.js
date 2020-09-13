import controller from './charts.controller';
import template from './charts.html';

const component = {
    controller: controller,
    template: template,
    bindings: {
        weatherData: '<'
    }
};

export default component;