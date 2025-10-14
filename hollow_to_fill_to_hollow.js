function delay() {
  for (let index= 0; index < 100000000; index++) {}
  return;
}

function join(array, delimiter) {
  let sentence = "";
  for (let index = 0; index < array.length - 1; index++) {
    sentence += array[index] + delimiter;
  }

  return sentence + array[array.length - 1];
}

function fillLine(numberOfCharacters, character = "*") {
  const singleLine = character.repeat(numberOfCharacters);
  return singleLine;
}

function hollowLine(numberOfCharacters, numberOfFilledLine) {
  let singleLine = "";

  for (let index = 0; index < numberOfFilledLine; index++) {
    singleLine += "*";
  }
  for (let index = singleLine.length; index < numberOfCharacters - numberOfFilledLine; index++) {
    singleLine += " ";
  }
  for (let index = singleLine.length; index < numberOfCharacters; index++) {
    singleLine += "*";
  }
  
  return singleLine;
}

function hollowRectangle(dimensions, numberOfFilledLine) {
  let completeLine = [];

  for (let index = 0; index < numberOfFilledLine; index++) {
    completeLine[index] = fillLine(dimensions[0], "*");
  }
  for (let index = completeLine.length; index < dimensions[1] - numberOfFilledLine; index++) {
    completeLine[index] = hollowLine(dimensions[0], numberOfFilledLine);
  }
  for (let index = completeLine.length; index < dimensions[1]; index++) {
    completeLine[index] = fillLine(dimensions[0], "*");
  }

  return join(completeLine, "\n");
}

function main() {
  while (true) {
    let index = 1;
    while (index <= 10) {
      console.clear();
      console.log(hollowRectangle([20, 20], index), "\n");
      index++;
      delay();
    }
    while (index > 0) {
      console.clear();
      console.log(hollowRectangle([20, 20], index), "\n");
      index--;
      delay();
    }
  }
}

main();
