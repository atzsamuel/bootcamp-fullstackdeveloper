function reverseWords(str){
  let result = "";
  let words = str.split(" ");
  for(let i = words.length - 1; i >= 0; i--) {
      result += words[i] + " ";
  }
  return result.trim();

// reverse those words
}