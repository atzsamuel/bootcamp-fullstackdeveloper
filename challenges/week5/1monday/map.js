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

//map(head.data((1, 2, 3)),head.next( x => x + 1)); //?
//map((1, 2, 3), x => x * 2); //?
