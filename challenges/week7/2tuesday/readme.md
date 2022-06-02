# The takeWhile Function

## Kata Link 🥋

[The takeWhile Function](https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascript)

## Helpful Resources 📖

1. [slice - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [findIndex - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

# Solution

```javascript
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
```

[Solution](./takeWhile.js)
