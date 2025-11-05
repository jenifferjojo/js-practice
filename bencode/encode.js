function integerEncode(data) {
  return "i" + data + "e";
}

function stringEncode(data) {
  return `${data.length}:${data}`;
}

function encode(data) {
  const type = typeof(data);

  if (type === "number") {
    return integerEncode(data);
  }

  if (type === "string") {
    return stringEncode(data);
  }

  if (Array.isArray(data)) {
    let encodedArray = "l";
    for (let index = 0; index < data.length; index++) {
      encodedArray += encode(data[index]);
    }
    return encodedArray + "e";
  }

  return "Enter valid data";
}

function composeMessage(type, data, actual, expected) {
  const isPassed = actual === expected;
  const status = isPassed ? "✅" : "❌";
  let message = status + type;
  if (!isPassed) {
    message += "\n\n---------------------------------------------";
    message += `\n\tinput: ${data}`;
    message += `\n\tactual: ${actual}`;
    message += `\n\texpected: ${expected}`;
    message += "\n-----------------------------------------------\n";
  }

  return message;
}

function testEncode(type, data, expected) {
  const actual = encode(data);
  const message = composeMessage(type, data, actual, expected);

  console.log(message);
}

function testAll() {
  testEncode("Integer encode", 123, "i123e");
  testEncode("Integer encode", 1623, "i1623e");
  testEncode("Negetive Integer encode", -1623, "i-1623e");
  testEncode("string encode", "hi", "2:hi");
  testEncode("string encode with special chars", "special!@#$chars", "16:special!@#$chars");
  testEncode("array encode", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncode("nested array encode", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
}

testAll();
