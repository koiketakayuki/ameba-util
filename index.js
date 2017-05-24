const isBoolean = require('./source/is-boolean');
const isNumber = require('./source/is-number');
const isString = require('./source/is-string');
const isObject = require('./source/is-object');
const isRecord = require('./source/is-record');
const isRecordType = require('./source/is-record-type');
const isInstanceOf = require('./source/is-instance-of');
const getHierarchyFields = require('./source/get-hierarchy-fields');
const createRecord = require('./source/create-record');
const getRootType = require('./source/get-root-type');

module.exports = {
  isBoolean,
  isNumber,
  isString,
  isObject,
  isRecord,
  isRecordType,
  isInstanceOf,
  getRootType,
  getHierarchyFields,
  createRecord,
};
