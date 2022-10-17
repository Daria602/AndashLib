// eslint-disable-next-line
const color = (el, binding) => {
    el.style.color = binding.value.textColor;
}

export default {
    directives: {
        color: color
    },
    props: {
        item: {
            type: String,
            default: ''
        }
    }
}