import { allowedProperties, allowedColors } from './util/constants.js';

const Color = (el, binding) => {
    for (const property in allowedProperties) {
        if (binding.value[property]) {
            if (allowedColors[property].includes(binding.value[property])) {
                el.className += ` ${allowedProperties[property]}-${binding.value[property]}`;
            }
        }
    }
}

export default Color;
