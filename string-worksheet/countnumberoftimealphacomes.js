function countAlpha(str) {
  let withoutAlpha = str.replaceAll("Alpha", "");
  return (str.length - withoutAlpha.length) / "Alpha".length;
}
console.log(countAlpha("AlphaIntern Alpha Web Alpha"));  // 3
