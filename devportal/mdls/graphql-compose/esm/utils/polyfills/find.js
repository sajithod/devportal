/* eslint-disable no-redeclare, func-names, consistent-return */
// $FlowFixMe
const find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (let i = 0; i < list.length; i++) {
    const value = list[i];

    if (predicate(value)) {
      return value;
    }
  }
};
export default find;