const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    } board.push(row);
  } return board;
};
generatePlayerBoard();

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    } board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // potential for bombs on top of already existing bombs - control flow
  } return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
