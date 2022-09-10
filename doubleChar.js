// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Solution One
function doubleChar(str) {
  const doubleArr = [];
  for (char of str) {
    const double = char.repeat(2);
    doubleArr.push(double);
  }
  return doubleArr.join("");
}
console.log(doubleChar("Hello World"));

// Solution Two
function doubleCharTwo(str) {
  const doubleArr = [];
  for (let i = 0; i < str.length; i++) {
    const double = str[i].repeat(2);
    doubleArr.push(double);
  }
  return doubleArr.join("");
}
console.log(doubleCharTwo("1234!_ "));

// Solution Three
function doubleCharThree(str) {
  let doubled = "";
  for (let i = 0; i < str.length; i++) {
    doubled += str[i].repeat(2);
  }
  return doubled;
}
console.log(doubleCharThree("String"));

// Solution Four
function doubleCharFour(str) {
  let doubled = "";
  str.split("").forEach((element) => {
    doubled += element.repeat(2);
  });
  return doubled;
}
console.log(doubleCharFour("String"));

// Solution Five
function doubleCharFive(str) {
  let doubled = "";
  str.split("").map((element) => {
    doubled += element.repeat(2);
  });
  return doubled;
}
console.log(doubleCharFive("Hello World"));

// Solution Six
function doubleCharSix(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}
console.log(doubleCharSix("Hello World"));

// Solution Seven
const doubleCharSeven = (str) =>
  str
    .split("")
    .map((char) => char + char)
    .join("");
console.log(doubleCharSeven("Hello World"));
console.log(doubleCharSeven("StringofStrings"));
console.log(doubleCharSeven("1234!_ $#%^@%^&"));
