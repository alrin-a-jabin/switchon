const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.task = !isEmpty(data.task) ? data.task : '';

  if (!Validator.isLength(data.task, { min: 10, max: 300 })) {
    errors.task = 'Task must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.task)) {
    errors.task = 'Task field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
