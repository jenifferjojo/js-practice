const input = 11;
let remainingDigits = input;
let digitalSum = 0;
let digit = 0;

digit = remainingDigits%10;
digitalSum = digitalSum + digit;
remainingDigits = remainingDigits - digit;
remainingDigits = remainingDigits/10;

digit = remainingDigits%10;
digitalSum = digitalSum + digit;
remainingDigits = remainingDigits - digit;
remainingDigits = remainingDigits/10;

console.log("The Digital Sum of",input,"is",digitalSum);
