function isEven(num) {
  return num % 2 === 0;
}
const array = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];

// function created to filter out all the odd numbers with array privided and function isEven
function takeWhile(array, isEven) {
  // Your code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      result.push(array[i]);
    } else {
      break;
    }
  }
  console.log(result);
  return result;
}

takeWhile(array, isEven); // [2, 4, 6, 8]
