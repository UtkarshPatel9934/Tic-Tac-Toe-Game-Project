/*
Function to determine if there is a winner.
The `player` argument is the player who's turn it is: 'x' or 'o'.
The `board` argument is a NodeList of TD cells on the board. It will always contain 9 TD elements.
`checkWin` returns an array of winning cells if there is a winner and null if not
*/

function checkWin(player, board) {
  "use strict";
  // Array of all possible winning combinations
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // convert `board` to an array so we can use `map`.
  const boardArray = Array.from(board);

  // `grid` will be an array of booleans, true if `player` occupies that square.
  const grid = boardArray.map((square) => square.classList.contains(player));

  // go through each possible winning position
  for (let win of winningPositions) {
    // if they are all true then it is a winner!
    if (grid[win[0]] && grid[win[1]] && grid[win[2]]) {
      return win;
    }
  }
  // there is no winner 😢
  return null;
}
