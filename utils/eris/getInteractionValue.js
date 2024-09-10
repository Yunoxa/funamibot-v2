module.exports = (object, position) => {
  if (object[position]) {
    return object[position].value;
  }
}