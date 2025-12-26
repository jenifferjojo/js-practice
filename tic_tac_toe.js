const BOARD = [
  [{ 1: false }, { 2: false }, { 3: false }],
  [{ 4: false }, { 5: false }, { 6: false }],
  [{ 7: false }, { 8: false }, { 9: false }],
];
const A = "0";
const B = "1";
const PLAYER_A = [];
const PLAYER_B = [];

const copy = (source) => {
  let key = 1;
  return source.map((row) => {
    const copiedRow = row.map((element) => {
      const obj = {};
      obj[key] = element[key];
      key++;
      return obj;
    });
    return copiedRow;
  });
};

const generateBoard = (board, player1) => {
  let key = 1;
  return board.map((row) => {
    return row.map((cell) => {
      if (!cell[key]) {
        key++;
        return "[ ]";
      }
      return player1.includes(key++) ? "[0]" : "[1]";
    }).join("");
  }).join("\n");
};

const players = { 0: PLAYER_A, 1: PLAYER_B };
const winningConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const draw = (player1, player2) => player1.length + player2.length >= 9;

const isWin = (playerMoves) => {
  return winningConditions
    .some((condition) =>
      condition
        .every((cell) => playerMoves.includes(cell))
    );
};

const verify = (cell) => {
  if (!(cell >= 0 && cell <= 9)) {
    return "Invalid Input";
  }
  if (PLAYER_A.includes(cell) || PLAYER_B.includes(cell)) {
    return "Cell already taken!";
  }
  return "success";
};

const storePlayerMove = (board, moves, cell) => {
  moves.push(cell);
  board.map((row) => {
    row.map((x) => {
      if (x[cell] === false) {
        x[cell] = true;
      }
    });
  });
  return board;
};

const max = (obj) => {
  return Object.entries(obj).reduce((highest, values) => {
    if (highest[1] > values[1]) {
      return highest;
    }
    return values;
  }, ["start", -Infinity]);
};

const min = (obj) => {
  return Object.entries(obj).reduce((smallest, values) => {
    if (smallest[1] < values[1]) {
      return smallest;
    }
    return values;
  }, ["start", Infinity]);
};

const minimax = (board, [...player1], [...player2], player) => {
  const state = {};
  if (isWin(player2)) {
    return 1;
  }
  if (isWin(player1)) {
    return -1;
  }
  if (draw(player1, player2)) {
    return 0;
  }
  let key = 1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j][key]) {
        const currentPlayer = player === 0 ? player1.slice() : player2.slice();
        state[key] = minimax(
          storePlayerMove(copy(board), currentPlayer, key),
          player === 0 ? currentPlayer : player1.slice(),
          player === 1 ? currentPlayer : player1.slice(),
          (player + 1) % 2,
        );
      }
      key++;
    }
  }
  return player === 1 ? max(state) : min(state);
};

const takeInput = (player) => {
  if (player === 1) {
    const state = minimax(
      copy(BOARD),
      PLAYER_A.slice(),
      PLAYER_B.slice(),
      player,
    );
    return parseInt(state[0]);
  }
  return parseInt(prompt("Enter your choice: "));
};

let turn = 0;
const play = (player) => {
  const cell = takeInput(turn % 2);
  if (verify(cell) === "success") {
    storePlayerMove(BOARD, players[player], cell);
    turn++;
  }
};

while (!isWin(players[(turn + 1) % 2]) && !draw(players[0], players[1])) {
  console.clear();
  console.log(generateBoard(BOARD, PLAYER_A));
  play(turn % 2);
}

console.clear();
console.log(generateBoard(BOARD, PLAYER_A));
console.log("\n\n", { PLAYER_A, PLAYER_B });
