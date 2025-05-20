    let sentence = "alpha intern web dev";
let capitalized = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized);  // "Alpha Intern Web Dev"
    