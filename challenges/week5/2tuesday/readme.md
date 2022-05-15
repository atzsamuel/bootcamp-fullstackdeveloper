# Separating Strings

## Kata Link 🥋

[Separating Strings](https://www.codewars.com/kata/5977ef1f945d45158d00011f/train/javascript)

## Helpful Resources 📖

1. [split - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. [for...of - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
3. [reduce - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
4. [from - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
5. [forEach - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

# My Solution 😎
[My Solution js](./sepStr.js)

```javascript
function sepStr(str) {
  const wordsSeparate = str.split(" ");

  //separte the words into letters
  const longestWord = [
    ...wordsSeparate.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, ''),
  ];

  //separate the letters into letters
  const longestMap = longestWord.map((_, index) => {
    // map the letters into an array
    return wordsSeparate.map((word) => {
      return word[index] || "";
    });
  });
  return longestMap;
}
```