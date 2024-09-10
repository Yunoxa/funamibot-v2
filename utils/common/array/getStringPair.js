module.exports = (string, slicedString, stringArr) => {
  const selectValues = [];
  stringArr.forEach(element => {
    element = element.toLowerCase();
    if (element.length > 1) {
      for (let i = 0; i < element.length; i++) {
        if (element.charAt(i) === string.charAt(slicedString.length - 1) && element.length > 1 && element.charAt(i + 1)) {
          selectValues.push(element.slice(i + 1));
        }
      }
    }
  });
  return selectValues;
}