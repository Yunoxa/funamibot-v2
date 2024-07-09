module.exports = {
  name: "sentencerand",
  async getRandomSentence() {
    // Words from json file. Not included in repo.
    const words = require("./words/sentencerand.json");

    // Random sentence generation from funamibot-v1
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
}
