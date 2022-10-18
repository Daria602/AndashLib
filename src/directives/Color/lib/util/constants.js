/**
 * todo: implement validator for predefined colors
 */
const allowedColors = {
    textColor: [
        'white',
        'neutral-dark',
        'neutral',
        'neutral-light',
        'neutral-lightest'
    ],
    backgroundColor: [
        'white',
        'neutral-dark',
        'neutral',
        'neutral-light',
        'neutral-lightest'
    ]
};

const allowedProperties = {
    textColor: 'clr-text',
    backgroundColor: 'clr-background'
};

export {
    allowedProperties,
    allowedColors
}
