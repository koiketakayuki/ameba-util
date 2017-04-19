const isRecordType = require('./is-record-type');
const getHierarchyFields = require('./get-hierarchy-fields');

function createRecord(type, args) {
  if (!isRecordType(type)) {
    throw new Error('record type is expected, but not given');
  }

  const result = { type };
  const fields = getHierarchyFields(type);

  fields.filter(f => f.id !== 'type').forEach((f) => {
    const fieldId = f.id;
    let fieldValue = args[fieldId];

    if (fieldValue == null) {
      if (f.isRequired) {
        throw new Error(`field "${fieldId}" is required, but not given`);
      }

      if (f.defaultValue != null) {
        fieldValue = f.defaultValue;
      }
    }

    result[fieldId] = fieldValue;
  });

  return result;
}

module.exports = createRecord;
