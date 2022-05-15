function highestScoringWord(x) {
  const wordList = x.split(" ");

  // create an array of objects with the word and score
  const wordScore = (word) => {
    return  word.split("").reduce((prevScore, currentWord) => prevScore + currentWord.charCodeAt(0) - 96,0);
  };

  const wordScoreList = wordList.map((word) => wordScore(word));
  //console.log(wordScoreList);

 // find the highest score and index
  let highestIndex = 0;
  let highestScore = 0;
  wordScoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  //console.log(wordList[highestIndex]);
  return wordList[highestIndex];
}

console.log(highestScoringWord("man i need a taxi up to ubud"));
