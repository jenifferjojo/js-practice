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

function findMedian(data) {
  const sortedData = sort(data);

  const medianIndex = Math.floor(sortedData.length / 2); 
  return sortedData[medianIndex];
}

function main(data) {
  const median = findMedian(data);
  console.log(median);
}

main([1, 2, 3]);
