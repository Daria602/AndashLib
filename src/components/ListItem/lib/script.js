import Color from '../../../directives/Color/lib/script.js';


export default {
    directives: {
        color: Color
    },
    props: {
        item: {
            type: String,
            default: ''
        }
    }
}