function generateBoard (white, black) {
  let board = []
  for (let i = 0; i < 8; i++) {
    let row = []
    for (let j = 0; j < 8; j++) {
      if ((j === white[0] && i === white[1]) || (j === black[0] && i === black[1])){
        row.push(1)
      } else {
        row.push(0)
      }
    }
    board.push(row)
  }
  return board
}


function queenThreat (board) {
  let queenPositions = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
     if(board[j][i] === 1) {
      queenPositions.push([j, i])
     }
    }
  }
  let netY = queenPositions[0][0] - queenPositions[1][0]
  let netX = queenPositions[0][1] - queenPositions[1][1]
  return Math.abs(netX) - Math.abs(netY) === 0
}


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));