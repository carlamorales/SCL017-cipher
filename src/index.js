import cipher from './cipher.js';

console.log(cipher);

document.getElementById("toEncPage").addEventListener("click", function() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("encodePage").style.display ="block";
});
document.getElementById("toDecPage").addEventListener("click", function() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("decodePage").style.display = "block";
});
document.getElementById("toAbtPage").addEventListener("click", function() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("aboutPage").style.display = "block";
});
document.getElementById("toHPage1").addEventListener("click", function() {
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
});
document.getElementById("toHPage2").addEventListener("click", function() {
  document.getElementById("encodePage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
});
document.getElementById("toHPage3").addEventListener("click", function() {
  document.getElementById("decodePage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
});
document.getElementById("encodeBtn").addEventListener("click", function() {
  let string = document.getElementById("inTxt").value;
  let offset = parseInt(document.getElementById("toTheRight").value);
  document.getElementById("outTxt").value = cipher.encode(string, offset);
});
document.getElementById("decodeBtn").addEventListener("click", function() {
  let string2 = document.getElementById("inTxt2").value;
  let offset2 = parseInt(document.getElementById("toTheLeft").value);
  document.getElementById("outTxt2").value = cipher.decode(string2, offset2);
});