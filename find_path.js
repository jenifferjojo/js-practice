const TILE = "🟥";
const BOMB = "🧨";
const PATH = "🧱";

function character(element) {
  if(!element[1]) {
    return TILE;
  }
  return element[0] === 1 ? PATH : BOMB;
}

function printRow(rowItems) {
  const line = [];
  line[0] = rowItems[0];
  for (let index = 1; index < rowItems.length; index++) {
    line[index] = character(rowItems[index]);
  }  

  return line.join("");
}

function printMap(map) {
  console.clear();
  const grid = [];
  const line = [];

  for (let index = 0; index < map.length; index++) {
    line[index] = map[0][index];
  }

  grid.push(line.join(" "));

  for (let index = 1; index < map.length; index++) {
    grid[index] = printRow(map[index]);
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
  for (let index = 1; index < mapRow.length; index++) {
    mapRow[index][1] = true;
  }
}

function checkRow(rowItems) {
  let index = 1;
  while (index < rowItems.length) {
    if (rowItems[index][0] === 1 && !rowItems[index][1]) return false;
    index++;
  }

  return true;
}

function checkWon(map) {
  let index = map.length - 1;

  while (index >= 1) {
    if(!checkRow(map[index])) {
      return false;
    }
    index--;
  }

  return index === 0;
}

function generatePath(map) {
  console.log(map);
  let start = (Math.floor(Math.random() * 100) % (map[1].length - 1)) + 1;

  map[1][start][0] = 1;
  map[2][start][0] = 1;

  let directions = [-1, 0, 1];

  let index = 2;
  while (index !== map.length - 1) {
    const direction = (Math.floor(Math.random() * 10)) % directions.length;
    
    console.log(direction, index, start);
    if (directions[direction] === 0) {
      map[++index][start][0] = 1;
    }

    if (directions[direction] === -1 && start !== 1) {
      map[index][--start][0] = 1;
      // map[++index][start][0] = 1;
      directions = [-1, 0];
    }

    if (directions[direction] === 1 && start !== map[index].length - 1) {
      map[index][++start][0] = 1;
      // map[++index][start][0] = 1;
      directions = [0, 1];
    }
  }

  return map;
}

function generateRow(row, n) {
  for (let index = 1; index < n; index++) {
    row[index] = [];
    row[index][0] = 0;
    row[index][1] = false;
  }
}

function generateMap(n) {
  const map = [];

  map[0] = [];
  for (let index = 0; index < n; index++) {
    map[0].push(index);
  }

  for (let index = 1; index < n; index++) {
    map[index] = [];
    map[index][0] = index;
    generateRow(map[index], n);
  }

  return generatePath(map);;
}

function main() {
  // const map = [[[0, false], [1, false], [0, false], [0, false], [0, false], [0, false]], 
  //              [[0, false], [1, false], [1, false], [1, false], [0, false], [0, false]],
  //              [[0, false], [0, false], [0, false], [1, false], [0, false], [0, false]],
  //              [[0, false], [0, false], [0, false], [1, false], [1, false], [0, false]],
  //              [[0, false], [0, false], [0, false], [0, false], [1, false], [0, false]],
  //              [[0, false], [0, false], [0, false], [0, false], [1, false], [0, false]]];


  const map = generateMap(10);

  console.log(printMap(map));
  let guessRemaining = 5;

  while (guessRemaining > 0 && !checkWon(map)) {
    const response = prompt("Enter the coordinates to reveal :");
    const coordinates = validate(response);
    
    reveal(map, coordinates);
    if (map[coordinates[0]][coordinates[1]][0] === 0 && map[coordinates[0]][coordinates[1]][1] === true) {
      guessRemaining = guessRemaining - 1;
    }

    console.log(printMap(map));
  }

  const message = guessRemaining === 0 ? "You Lost!" : "You WON";

  if (message === "You Lost!") {
    for (let index = 1; index < map.length; index++) {
      revealMap(map[index]);
    }

    console.log(printMap(map));
  }
  console.log(message);

}

main();

const playAgain = confirm("Wanna play again ?");
if (playAgain) {
  main();
}
