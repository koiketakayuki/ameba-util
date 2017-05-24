function isObject(item) {
  return item === Object(item) && !Array.isArray(item);
}

module.exports = isObject;
