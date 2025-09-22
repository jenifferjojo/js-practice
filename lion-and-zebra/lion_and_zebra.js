// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 1092;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;

let primeFactor = 2;
while ( primeFactor <= a) {
  if ( number%primeFactor === 0) {
    console.log(primeFactor);
    number = number/primeFactor; 
  } else {
    primeFactor++;
  }
}
