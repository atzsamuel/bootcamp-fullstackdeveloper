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
console.log(sepStr("Just Live Life Man"));
//console.log(sepStr("The Mitochondria is the powerhouse of the cell"));
