module.exports = (words, messages) => {
  // Super random sentence generation from funamibot-v1
  const enders = [".", "!", "?"];

  function randomMessageOOC() {
    return messages.MessagesOOC[Math.floor(Math.random() * messages.MessagesOOC.length)];
  }

  function randomWord() {
    return words.words[Math.floor(Math.random() * words.words.length)];
  }

  function randomSentenceEnd() {
    return enders[Math.floor(Math.random() * enders.length)];
  }

  function randomWords(max = 4) {
    let randomWordsCount = (Math.floor(Math.random() * max) + 1);
    wordsList = [];
    for (i = 0; i < randomWordsCount; i++) {
      wordsList.push(randomWord());
    }

    return wordsList.join(" ");
  }

  const sentenceTemplates = [
    `I'm ${randomWords()}${randomSentenceEnd()}`,
    `I ${randomWords()}${randomSentenceEnd()}`,
    `${randomWord()} is ${randomWord()}${randomSentenceEnd()}`,
    `Put ${randomWord()} in ${randomWord()}${randomSentenceEnd()}`,
    `${randomMessageOOC()}, ${randomMessageOOC()}`,
    `${randomMessageOOC()}. ${randomMessageOOC()}`
  ];

  return sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)];
};
