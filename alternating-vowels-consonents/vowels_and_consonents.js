function isVowel(character) {
  return (character === "a" || character === "e" || character === "i" || character === "o" || character === "u");
}

function makeSubstrings(string) {
  let substringString = "";
  let isPreviousVowel = false;
  let substring = "";
  let mainString = string;
  let temporaryString = "";

  for (let index = 0; index < mainString.length; index++) {
    
    if ((isVowel(mainString[index]) === isPreviousVowel) && substring !== "") {
      temporaryString += mainString[index];
    }

    if ((isVowel(mainString[index]) !== isPreviousVowel) || substring === "") {
      isPreviousVowel = isVowel(mainString[index]);
      substring += mainString[index];

    }

    if (index === mainString.length - 1) {
      index = -1;
      substringString += substring + ", ";
      mainString = temporaryString;
      temporaryString = "";
      substring = "";
    }

  }

  return substringString;
}

function composeMessage(string, actual, expectation) {
  const status = (actual === expectation) ? "✅" : "❌";
  const inputPart = "[ " + string + " ]";
  const actualPart = " | actual output: " + actual;
  const expectationPart = " | expected: " + expectation;

  const message = status + inputPart + actualPart + expectationPart;

  return message;
}

function testMakeSubstrings(string, expectation) {
  const actual = makeSubstrings(string);
  const message = composeMessage(string, actual, expectation);

  console.log(message);
}

function testAll() {
  testMakeSubstrings("apple", "ape, p, l, ");
  testMakeSubstrings("there", "tere, h, ");
  testMakeSubstrings("hello", "helo, l, ");
  testMakeSubstrings("abyss", "ab, y, s, s, ");
  testMakeSubstrings("this", "tis, h, ");
  testMakeSubstrings("aaabbb", "ab, ab, ab, ");
  testMakeSubstrings("banana", "banana, ");
  testMakeSubstrings("applee", "ape, pe, l, ");
  testMakeSubstrings("thoughtworks", "togor, huh, t, w, k, s, ");
}

testAll();
