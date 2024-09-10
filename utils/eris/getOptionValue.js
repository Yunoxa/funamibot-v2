module.exports = (arrObjects, optionName) => {
  for (let i = 0; i < arrObjects.length; i++) {
    if (arrObjects[i].name === optionName) {
      return arrObjects[i].value;
    } 
  }
}