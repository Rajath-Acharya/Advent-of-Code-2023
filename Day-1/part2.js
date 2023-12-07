const fs = require("fs");

const texts = fs.readFileSync("./test-input2.txt", "utf-8");
let a = 0;
let b = 0;
let sum = 0;

const textsArr = texts.split("\n");

textsArr.forEach((str) => {
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
