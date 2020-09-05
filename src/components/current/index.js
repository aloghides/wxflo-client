import controller from './current.controller';
import template from './current.html';

const component = {
    controller: controller,
    template: template,
    bindings: {
        weatherData: '<'
    }
};

export default component;