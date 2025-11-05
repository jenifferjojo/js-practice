function findMean(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum / data.length;
}

function findDifferenceSqr(value, mean) {
  return (value - mean) ** 2;
}

function findStandardDeviation(data) {
  const mean = findMean(data);  
  let sum = 0;
  
  for (let index of data) {
    sum += findDifferenceSqr(index, mean); 
  }

  return Math.sqrt(sum/ data.length);
}

function main(data) {
  const standardDeviation = findStandardDeviation(data);
  console.log(standardDeviation);
}

main([0, 0, 0, 100]);