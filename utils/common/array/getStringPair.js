module.exports = (string, slicedString, stringArr) => {
  const selectValues = [];
  stringArr.forEach(element => {
    element = element.toLowerCase();
    if (element.toLowerCase().charAt(0) === string.charAt(slicedString.length - 1) && element.length > 1) {
      selectValues.push(element.slice(1));
    }
  });
  console.log(selectValues);
  return selectValues;
}