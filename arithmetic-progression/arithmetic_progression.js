const number = 10;
let APValue = 0;

for (let termNumber = 0; termNumber <= number ;termNumber++) {
  APValue = termNumber + APValue;
}

console.log("Value of Arithmetic Progression till",number,"is",APValue);
