const input = 999;
let digitalSum = 0;
let digit = 0;
let remainingDigits = input;

while(remainingDigits > 0){
  digit = remainingDigits%10;
  digitalSum = digitalSum + digit;
  remainingDigits = remainingDigits - digit;
  remainingDigits = remainingDigits/10;
}

console.log("The Digital Sum of",input,"is",digitalSum);
