const numberOfTerms = 3;
let nextTermValue = 1;
let currentTermValue = 0;

for(let iteration = 1; iteration <= numberOfTerms ; iteration++){
  console.log(currentTermValue);
  nextTermValue = nextTermValue + currentTermValue;
  currentTermValue = nextTermValue - currentTermValue;
}
