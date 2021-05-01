const getChessboard = (size) => {
  let chessboard = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      chessboard.push((row + col) % 2 === 0 ? " " : "#");
    }
    chessboard.push("\n");
  }
  return chessboard.join("");
};

console.log(getChessboard(8));
