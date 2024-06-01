const array = [1, 2, 3, 4];
const output = [];
// output = [16,24,12,24]

console.log("11111", array);
for (let i = 0; i < array.length; i++) {
  let product = 1;
  for (let j = 0; j < array.length; j++) {
    if (i != j) {
      product = product * array[j];
    } else {
      product = product * 1;
    }
  }
  output.push(product);
}
console.log("ppppppp", output);
