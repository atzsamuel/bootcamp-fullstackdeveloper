# Where Is My Parent?

## Kata Link 🥋

[Where Is My Parent?](https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript)

## Helpful Resources 📖

1. [split - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. [sort - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
3. [join - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
4. [localCompare - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

# My Solution

[My Solution](./findChildren.js)

```javascript
function findChildren(dancingBrigade) {
  return dancingBrigade
    .split("")
    .sort((a, b) => a.localeCompare(b, "kf", { caseFirst: "upper" }))
    .join("");
}
```

# Other Solutions
```javascript
function findChildren(dancingBrigade){
  [...dancingBrigade].sort((a, b) => a.localeCompare(b, `kf`, {caseFirst: `upper`})).join(``);
}
```
