function isVowel(character) {
  const vowelString = "aeiou";
  let index = 0;

  while (index < vowelString.length) {
    if (character === vowelString[index]) {
      return true;
    }
    index++;
  }

  return false;
}

function makeSubstrings(string) {
  let substringString = "";
  let isPreviousVowel = false;
  let extractedString = "";
  let mainString = string;
  let unusedCharacters = "";

  for (let index = 0; index < mainString.length; index++) {
    
    if ((isVowel(mainString[index]) === isPreviousVowel) && extractedString !== "") {
      unusedCharacters += mainString[index];
    }

    if ((isVowel(mainString[index]) !== isPreviousVowel) || extractedString === "") {
      extractedString += mainString[index];
      isPreviousVowel = isVowel(mainString[index]);
    }

    if (index === mainString.length - 1) {
      index = -1;
      substringString += extractedString + ", ";
      mainString = unusedCharacters;
      unusedCharacters = "";
      extractedString = "";
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
