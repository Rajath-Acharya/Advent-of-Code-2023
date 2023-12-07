const fs = require("fs");

const texts = fs.readFileSync("./test-input1.txt", "utf-8");
let a = 0;
let b = 0;
let sum = 0;

const map = {
  one: "one1one",
  two: "two2two",
  three: "three3three",
  four: "four4four",
  five: "five5five",
  six: "six6six",
  seven: "seven7seven",
  eight: "eight8eight",
  nine: "nine9nine",
};

const textsArr = texts.split("\n");

textsArr.forEach((str) => {
  for (let [num, val] of Object.entries(map)) {
    str = str.replaceAll(num, val);
  }

  for (let i = 0; i < str.length; i++) {
    const text = str[i];

    if (text !== "" && !isNaN(text) && !isNaN(+text)) {
      if (!a) a = text;
      else b = text;
    }
  }

  b = b || a;
  sum += Number(a + b);
  a = b = 0;
});

console.log("sum", sum);
