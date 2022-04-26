function ensureQuestion(s) {
  // Code here
  //return s.slice(-1)=='?'? s:s+'?'
  return s.endsWith('?')?s:s+'?'
}

ensureQuestion('hello') // 'hello?'
ensureQuestion('hello there') // 'hello there?'
ensureQuestion('oh, hello') // 'oh, hello?'