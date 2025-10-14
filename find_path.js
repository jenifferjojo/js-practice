const TILE = "🟥";
const BOMB = "🧨";
const PATH = "🧱";

function character(element) {
  if(!element[1]) {
    return TILE;
  }
  return element[0] === 1 ? PATH : BOMB;
}

function generateRow(rowItems) {
  const line = [];
  for (let index = 0; index < rowItems.length; index++) {
    line[index] = character(rowItems[index]);
  }  

  return line.join("");
}

function generateMap(map) {
  console.clear();
  const grid = [];
  for (let index = 0; index < map.length; index++) {
    grid[index] = generateRow(map[index]);
  }

  return grid.join("\n");
}

function validate(response) {
  const coordinates = [];
  const splittedItems = response.trim().split(" ");
  coordinates[0] = parseInt(splittedItems[0]);
  coordinates[1] = parseInt(splittedItems[1]);

  console.log(coordinates);
  return coordinates;
}

function reveal(map, coordinates) {
  map[coordinates[0]][coordinates[1]][1] = true;
}

function revealMap(mapRow) {
  for (let index = 0; index < mapRow.length; index++) {
    mapRow[index][1] = true;
  }
}

function checkRow(rowItems) {
  let index = 0;
  while (index < rowItems.length) {
    if (rowItems[index][0] === 1 && !rowItems[index][1]) return false;
    index++;
  }

  return true;
}

function checkWon(map) {
  let index = map.length - 1;

  while (index >= 0) {
    if(!checkRow(map[index])) {
      return false;
    }
    index--;
  }

  return index === -1;
}

function generate(n) {
  const map = [[[" "], [1], [2], [3], [4], [5], [6]], 
               [[1], [1, false], [1, false], [1, false], [0, false], [0, false], [0, false]],
               [[2], [0, false], [0, false], [1, false], [0, false], [0, false], [0, false]],
               [[3], [0, false], [0, false], [1, false], [1, false], [0, false], [0, false]],
               [[4], [0, false], [0, false], [0, false], [1, false], [0, false], [0, false]],
               [[5], [0, false], [0, false], [0, false], [1, false], [0, false], [0, false]],
               [[6], [1, false], [0, false], [0, false], [0, false], [0, false], [0, false]]];
  return map;
}

function main() {
  const map = [[[0, false], [1, false], [0, false], [0, false], [0, false], [0, false]], 
               [[0, false], [1, false], [1, false], [1, false], [0, false], [0, false]],
               [[0, false], [0, false], [0, false], [1, false], [0, false], [0, false]],
               [[0, false], [0, false], [0, false], [1, false], [1, false], [0, false]],
               [[0, false], [0, false], [0, false], [0, false], [1, false], [0, false]],
               [[0, false], [0, false], [0, false], [0, false], [1, false], [0, false]]];


  // const map = generate();

  console.log(generateMap(map));
  let guessRemaining = 5;

  while (guessRemaining > 0 && !checkWon(map)) {
    const response = prompt("Enter the coordinates to reveal :");
    const coordinates = validate(response);
    
    reveal(map, coordinates);
    if (map[coordinates[0]][coordinates[1]][0] === 0 && map[coordinates[0]][coordinates[1]][1] === true) {
      guessRemaining = guessRemaining - 1;
    }

    console.log(generateMap(map));
  }

  const message = guessRemaining === 0 ? "You Lost!" : "You WON";

  if (message === "You Lost!") {
    for (let index = 0; index < map.length; index++) {
      revealMap(map[index]);
    }

    console.log(generateMap(map));
  }
  console.log(message);

}

main();

const playAgain = confirm("Wanna play again ?");
if (playAgain) {
  main();
}
