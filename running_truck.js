const CAR = "⛟";
const HURDDLE = "🚧";
const ROAD = "࿐";

function delay() {
  for (let index= 0; index < 200000000; index++) {}
  return;
}

function isEven(value) {
  return value % 2 === 0;
}

function generateScreen(n) {
  const screen = [];
  for (let index = 0; index < n; index++) {
    screen.push((" ".repeat(n)).split(""));
  }
  const carCordinate = ((Math.floor(Math.random() * 100)) % n);
  const hurddleCoordinate = ((Math.floor(Math.random() * 100)) % n);
  screen[n - 2][carCordinate] = CAR;
  screen[n - 2][hurddleCoordinate] = HURDDLE;
  
  for (let index = 0; index < n; index++) {
    screen[n - 1][index] = !isEven(index) ? ROAD : " ";
  }
  return screen;
}

function generateRow(rowItems) {
  const row = [];
  for (let index = 0; index < rowItems.length; index++) {
    row[index] = rowItems[index];
  }  

  return row.join("");
}

function arrayToString(screen) {
  const completeLine = [];
  for (let index = 0; index < screen.length; index++) {
    completeLine[index] = generateRow(screen[index]);    
  }

  return completeLine.join("\n");
}

function shiftingLastRow(screen) {
  const lastRow = screen.length - 1;
  for (let index = 0; index < screen[lastRow].length; index++) {
    screen[lastRow][index] = screen[lastRow][(index + 1) % screen[lastRow].length];
  }
}

function displayScreen(screen) {
  console.log(arrayToString(screen));
  delay();
  console.clear();
}

function jumping(screen, tramOn) {
  const secondLastRow = screen.length - 2;
  shiftingLastRow(screen);
  rain(screen);

  screen[secondLastRow][tramOn] = " ";
  screen[secondLastRow - 1][tramOn] = CAR;
  displayScreen(screen);

  for (let index = 0; index < 2; index++) {
    shiftingLastRow(screen);
    rain(screen);

    screen[secondLastRow - 1][tramOn + index] = " ";
    screen[secondLastRow - 1][tramOn + index + 1] = CAR;
    displayScreen(screen);
  }

  shiftingLastRow(screen);
  rain(screen);

  screen[secondLastRow - 1][tramOn + 2] = " ";
  screen[secondLastRow][tramOn + 2] = CAR;
  displayScreen(screen);

}

function findObject(secondLastRow) {
  let index = 0;
  while (secondLastRow[index] !== HURDDLE) {
    index++;
  }

  return index;
}

function running(screen) {
  const secondLastRow = screen.length - 2;
  shiftingLastRow(screen);

  let index = 0;
  while (screen[secondLastRow][index] !== CAR) {
    index++;
  }

  const tramOn = index;
  if (screen[secondLastRow][tramOn + 1] === HURDDLE) {
    jumping(screen, tramOn);
    screen[secondLastRow][index + 2] = " ";
    screen[secondLastRow][index += 3] = CAR;
  }

  if(tramOn === screen[secondLastRow].length - 3) {
    const objectOn = findObject(screen[secondLastRow]);
    screen[secondLastRow][objectOn] = " ";
    screen[secondLastRow][2 + Math.floor((Math.random() * 100)) % (screen[secondLastRow].length - 5)] = HURDDLE;
  }

  screen[secondLastRow][index] = " ";
  screen[secondLastRow][(index % (screen[secondLastRow].length - 2)) + 1] = CAR;
}

function rainRow(row) {
  for(let index = 0; index < row.length; index++) {
    const drop = Math.floor(Math.random() * 10);
    row[index] = drop > 1 ? " " : "⸝";
  }

  return row;
}

function rain(screen) {
  for (let index = 0; index < screen.length - 2; index++) {
    screen[index] = rainRow(screen[index]);
  }
}

function main() {
  const screen = generateScreen(39);

  while (true) {
    rain(screen);
    running(screen);
    displayScreen(screen);
  }

}

main();
