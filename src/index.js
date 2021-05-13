import cipher from './cipher.js';

console.log(cipher);

document.getElementById("toEncodePage").addEventListener("click", toEncodePage)
function toEncodePage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("encodePage").style.display = "block";
}

document.getElementById("toDecodePage").addEventListener("click", toDecodePage)
function toDecodePage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("decodePage").style.display = "block";
}

document.getElementById("toAboutPage").addEventListener("click", toAboutPage)
function toAboutPage() {
  document.getElementById("homepage").style.display = "none";
  document.getElementById("aboutPage").style.display = "block";
}

document.getElementById("toTheStart1").addEventListener("click", toTheStart1)
function toTheStart1() {
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
}

document.getElementById("toTheStart2").addEventListener("click", toTheStart2)
function toTheStart2() {
  document.getElementById("encodePage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
}

document.getElementById("toTheStart3").addEventListener("click", toTheStart3)
function toTheStart3() {
  document.getElementById("decodePage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
}

document.getElementById("funEnc").addEventListener("click", funEnc)
function funEnc() {
  let string = document.getElementById("inTxt").value;
  let offset = parseInt(document.getElementById("toTheRight").value);

  document.getElementById("outTxt").value = cipher.encode(string, offset);
}