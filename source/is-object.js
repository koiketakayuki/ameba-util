const isFunction = require('./is-function');

function isObject(item) {
  return item === Object(item) && !Array.isArray(item) && !isFunction(item);
}

module.exports = isObject;
