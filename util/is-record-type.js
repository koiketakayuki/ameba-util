const RecordType = require('ameba-core').Types.RecordType;
const getHierarchyFields = require('./get-hierarchy-fields');
const isObject = require('./is-object');

function isRecordType(obj) {
  if (!isObject(obj)) {
    return false;
  }

  const propertyNames = Object.getOwnPropertyNames(obj);

  return getHierarchyFields(RecordType).every(f => propertyNames.includes(f.id));
}

module.exports = isRecordType;
