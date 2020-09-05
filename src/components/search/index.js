import controller from './search.controller';
import template from './search.html';

const component = {
    template: template,
    controller: controller,
    bindings: {
        location: '<',
        onSearch: '&'
    }
}

export default component;
