const array = [3, 2, 4, 2];
const output = [];
// output = [16,24,12,24]

console.log("11111", array);
for (let i = 0; i < array.length; i++) {
  let product = 1;
  for (let j = 0; j < array.length; j++) {
    if (i != j) {
      product *= array[j];
    }
  }
  if (product == -0) {
    product = 0;
  }
  output.push(product);
}
console.log("array", array);
console.log("output", output);
