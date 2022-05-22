# Sudoku Solution Validator

## Kata Link 🥋

[Sudoku Solution Validator](https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript)

## Helpful Resources 📖

1. [reduce - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
2. [slice - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
3. [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## Solution

[My Solution](./sudokuSolutionValidator.js)

```javascript
function sudokuSolutionValidator(board) {
  let validSet = (s) => s.size == 9 && !s.has(0);
  let rowSet = (i) => board[i].reduce((s, v) => s.add(v), new Set());
  let columnSet = (i) => board.reduce((s, v) => s.add(v[i]), new Set());
  let boxSet = ([r, c]) =>
    board
      .slice(r, r + 3)
      .reduce(
        (s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s),
        new Set()
      );
  let boxCorner = (i) => [Math.floor(i / 3) * 3, (i % 3) * 3];
  for (let i = 0; i < 9; i++)
    if (
      !validSet(rowSet(i)) ||
      !validSet(columnSet(i)) ||
      !validSet(boxSet(boxCorner(i)))
    )
      return false;
  return true;
}
```
