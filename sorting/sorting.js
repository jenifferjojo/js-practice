function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i; j < sortedData.length; j++) {
      if (sortedData[j] > sortedData[i]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

function randomElement(upper, lower) {
  return lower + Math.floor(Math.random() * (upper - lower));
}

function randomElements(numberOfElements) {
  const data = [];
  for (let index = 0; index < numberOfElements; index++) {
    data.push(randomElement(1, 100));
  }

  return data;
}

function main(numberOfElements) {
  const data = randomElements(numberOfElements);
  const sortedData = sort(data);

  console.log(sortedData);
}

main(9);
