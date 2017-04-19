const isBoolean = require('./util/is-boolean');
const isNumber = require('./util/is-number');
const isString = require('./util/is-string');
const isObject = require('./util/is-object');
const isList = require('./util/is-list');
const isRecord = require('./util/is-record');
const isRecordType = require('./util/is-record-type');
const getHierarchyFields = require('./util/get-hierarchy-fields');
const createRecord = require('./util/create-record');
const getRootType = require('./util/get-root-type');

module.exports = {
  isBoolean,
  isNumber,
  isString,
  isObject,
  isList,
  isRecord,
  isRecordType,
  getRootType,
  getHierarchyFields,
  createRecord,
};
