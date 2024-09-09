module.exports = (string, stringArr) => {
  const randomString = stringArr[Math.floor(Math.random() * stringArr.length)];

  if (!randomString) {
    return "I had difficulty generating a string with your input. Some characters here may be invalid. Try sticking to English characters if possible and remove any spaces from your input.";
  }
  
  return `${string} ${randomString}`;
}