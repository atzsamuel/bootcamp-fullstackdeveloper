# Highest Scoring Word

## Kata Link 🥋

[Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript)

## Helpful Resources 📖

1. [map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
2. [split - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
3. [reduce - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
4. [Math.max - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
5. [charCodeAt - MDN](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/charcodeat)

# My Solution 😎

[My Solution](./high.js)

```javascript
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
```

# Other Solution  😎

```javascript
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
```
