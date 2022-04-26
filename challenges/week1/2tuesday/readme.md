# Ensure question

[Link to Codewars](https://www.codewars.com/kata/5866fc43395d9138a7000006)

## Description

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.


`Example 1`

```
    "Yes" --> "Yes?" 
    "No?" --> "No?" 
```

`My Solution`

```js
function ensureQuestion(s) {
  // Code here
  // solution 1 return s.slice(-1)=='?'? s:s+'?'
  return s.endsWith('?') ? s : s+'?'
}
```