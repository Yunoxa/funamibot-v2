// Json list of words (not included in repo, make your own)
const words = require("./words/sentencerand.json");

// Random sentence generation from funamibot-v1
async function getRandomSentence() {
  const firstwordoutput = words.firstword[Math.floor(Math.random()*words.firstword.length)];
  const secondwordoutput = words.secondword[Math.floor(Math.random()*words.secondword.length)];
  const thirdwordoutput = words.thirdword[Math.floor(Math.random()*words.thirdword.length)];
  const question = "?";
  const questionoutput = [(Math.random())];

  if (questionoutput >= 0.5) {
    return `${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}${question}`;
  } else if (questionoutput <0.5) {
    return `${firstwordoutput} ${secondwordoutput} ${thirdwordoutput}`;
  }
}

module.exports = { getRandomSentence };
