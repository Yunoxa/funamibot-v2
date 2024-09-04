module.exports = (string, slicedString, stringArr) => {
  const selectValues = [];
  stringArr.forEach(element => {
    if (element.toLowerCase().charAt(0) === string.charAt(slicedString.length - 1)) {
      selectValues.push(element.toLowerCase().slice(1));
    }
  });
  return selectValues;
}