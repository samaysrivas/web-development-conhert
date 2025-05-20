let input = "JavaScript is Fun";
let vowels = "aeiouAEIOU";
let count = 0;
for (let char of input) {
  if (vowels.includes(char)) count++;
}
console.log(count);  // Output: number of vowels
