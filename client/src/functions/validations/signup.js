import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordconfirmation)) {
    errors.passwordconfirmation = 'Password must match';
  }
  if (Validator.isEmpty(data.passwordconfirmation)) {
    errors.passwordconfirmation = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
