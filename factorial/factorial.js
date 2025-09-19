const inputNumber = 5 ;
let factorial = 1;

for(let multiplier = 2; multiplier <= inputNumber ; multiplier++){
  factorial = factorial * multiplier;
}
console.log("factorial of",inputNumber,"is",factorial);
