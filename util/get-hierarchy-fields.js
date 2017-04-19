const Record = require('ameba-core').Types.Record;

function getHierarchyFields(recordType) {
  if (recordType === Record) {
    return Record.fields;
  }

  const fields = recordType.fields;
  const traitFields = recordType.traits.reduce(
    (acc, e) => Array.prototype.concat(acc, e.fields), []);
  const baseTypeFields = getHierarchyFields(recordType.baseType);

  return Array.prototype.concat(baseTypeFields, traitFields, fields);
}

module.exports = getHierarchyFields;
