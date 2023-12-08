const fs = require("fs");

/* Test Data

  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

  Solution: 2286

*/

const texts = fs.readFileSync("./test-input2.txt", "utf-8");

const textsArr = texts.split("\n");

let total = 0;

textsArr.forEach((text) => {
  const str = text.split(":");

  const cubes = str[1]
    .split(";")
    .join(",")
    .split(" ")
    .filter((v) => v);

  let mB = 0;
  let mG = 0;
  let mR = 0;
  let product = 0;

  for (let j = 0; j < cubes.length; j++) {
    const cube = cubes[j];
    const val = cube.trim();

    if (val.indexOf("blue") > -1) {
      const i = j - 1;
      const v = cubes[+i];
      mB = Math.max(v, mB);
    }
    if (cube.indexOf("green") > -1) {
      const i = j - 1;
      const v = cubes[+i];
      mG = Math.max(v, mG);
    }
    if (cube.indexOf("red") > -1) {
      const i = j - 1;
      const v = cubes[+i];
      mR = Math.max(v, mR);
    }
  }

  product = mB * mG * mR;

  mB = 0;
  mG = 0;
  mR = 0;

  total += +product;
});

console.log("total", total);
