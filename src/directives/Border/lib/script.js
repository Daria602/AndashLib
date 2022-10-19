// eslint-disable-next-line
const Border = (el, binding) => {
    el.style.borderWidth = binding.value.width;
    el.style.borderColor = binding.value.color;
    el.style.borderStyle = binding.value.style; 
}

export default Border;
