const sudokuSolutionValidator = (board) => {
  // Your code here
  let row = [], col = [], box = [];
  for (let i = 0; i < 9; i++) {
    row[i] = new Set();
    col[i] = new Set();
    box[i] = new Set();
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (row[i].has(board[i][j])) return false;
        else row[i].add(board[i][j]);
        if (col[j].has(board[i][j])) return false;
        else col[j].add(board[i][j]);
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (box[boxIndex].has(board[i][j])) return false;
        else box[boxIndex].add(board[i][j]);
      }
    }
  }
  return true;
};

console.log(sudokuSolutionValidator([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));
