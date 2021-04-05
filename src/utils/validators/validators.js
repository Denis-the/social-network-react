

export const requiredField = value => {
    if (value) return undefined;
    else return 'Field is reqired';
}

export const maxLengthFieldCreator = (maxLength) => {
    return (value) => {
        if (value && value.length <= maxLength) return undefined
        else return `max length is ${maxLength} symbols`
    }
}

export const minLengthFieldCreator = (minLength) => {
    return (value) => {
        if (value && value.length >= minLength) return undefined
        else return `min length is ${minLength} symbols`
    }
}


export const composeValidators = (...validators) => value => {
    return validators.reduce((error, validator) => error || validator(value), undefined)
} 