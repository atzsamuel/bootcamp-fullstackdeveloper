# Fun With Lists

## Kata Link 🥋

[Fun With Lists](https://www.codewars.com/kata/58259d9062cfb45e1a00006b/train/javascript)

## Helpful Resources 📖

1. [LinkedList](https://www.geeksforgeeks.org/data-structures/linked-list/)

# My Solution 😎
[My Solution js](./map.js)

```javascript
function map(head, f) {
  if (head === null) {
    return null;
  }
  /*const result = new Node(f(head.data),map(head.next,f));
  return result;*/
  return {
    data: f(head.data),
    next: map(head.next, f),
  };
}
```

# Other Soutions

`Solution 1` 😎

```javascript
function map(head, f) {
  if (head === null) return head;
  let result = null,
    resultAux = null;
  let node = head;
  while (node != null) {
    if (result == null) {
      result = new Node(f(node.data), null);
      resultAux = result;
    } else {
      resultAux.next = new Node(f(node.data), null);
      resultAux = resultAux.next;
    }
    node = node.next;
  }
  return result;
}
```

`Solution 2` 😎

```javascript
function map(head, f) {
  return !head ? null : new Node(f(head.data), map(head.next, f));
}
```
