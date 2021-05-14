let cipher = {
  encode: (string, offset) => {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      let asciiNum = string.charCodeAt(i); 
      if (asciiNum >= 65 && asciiNum <= 90) {
        asciiNum = (((asciiNum - 65 + offset) % 26) + 65);
      }
      newString += String.fromCharCode(asciiNum);
    }
    return newString;
  },
  decode: (string2, offset2) => {
    let newString2 = "";
    for (let i = 0; i < string2.length; i++) {
      let asciiNum2 = string2.charCodeAt(i);
      if (asciiNum2 >= 65 && asciiNum2 <= 90) {
        asciiNum2 = (((asciiNum2 + 65 - offset2) % 26) + 65);
      }
      newString2 += String.fromCharCode(asciiNum2);
    }
    return newString2;
  }
};

export default cipher;