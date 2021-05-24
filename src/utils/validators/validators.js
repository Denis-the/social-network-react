export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is reqired";
};

export const maxLengthFieldCreator = (maxLength) => (value) => {
  if (value && value.length <= maxLength) return undefined;
  return `max length is ${maxLength} symbols`;
};

export const minLengthFieldCreator = (minLength) => (value) => {
  if (value && value.length >= minLength) return undefined;
  return `min length is ${minLength} symbols`;
};

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
