const Core = require('ameba-core');

const getHierarchyFields = require('./get-hierarchy-fields');
const isInstanceOf = require('./is-instance-of');

function createRecord(type, args) {
  const result = {};
  const fields = getHierarchyFields(type).filter(f => f.id !== Core.Fields.type.id);

  fields.forEach((f) => {
    const fieldId = f.id;
    let fieldValue = args[fieldId];

    if (fieldValue == null) {
      if (f.isRequired) {
        throw new Error(`field "${fieldId}" is required, but not given`);
      }

      // set defaultValue if exists
      if (f.defaultValue != null) {
        fieldValue = f.defaultValue;
      }
    }

    // type check
    if (fieldValue !== null && !isInstanceOf(fieldValue, f.fieldType)) {
      const actualType = typeof fieldValue;
      throw new Error(`field type of "${f.id}" is ${f.fieldType.id}, but actual js type is ${actualType}`);
    }

    // validate if validator exists
    if (f.validator) {
      const errorMessage = f.validator(fieldValue);

      if (errorMessage) {
        throw new Error(errorMessage);
      }
    }

    result[fieldId] = fieldValue;
  });

  return result;
}

module.exports = createRecord;
