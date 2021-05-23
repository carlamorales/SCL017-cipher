const cipher = {
  encode: (offset, string) => {
    if (typeof string !== "string" || typeof offset !== "number") {
      throw new TypeError("Argumentos de tipo erróneo");
    }
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      let asciiNum = string.charCodeAt(i); 
      if (asciiNum >= 65 && asciiNum <= 90) {
        asciiNum = (((asciiNum - 65 + offset) % 26) + 65);
      } else if (asciiNum >= 97 && asciiNum <= 122) {
        asciiNum = (((asciiNum - 97 + offset) % 26) + 97);
      }
      newString += String.fromCharCode(asciiNum);
    }
    return newString;
  },
  decode: (offset2, string2) => {
    if (typeof string2 !== "string" || typeof offset2 !== "number") {
      throw new TypeError("Argumentos de tipo erróneo");
    }
    let newString2 = "";
    for (let i = 0; i < string2.length; i++) {
      let asciiNum2 = string2.charCodeAt(i);
      if (asciiNum2 >= 65 && asciiNum2 <= 90) {
        asciiNum2 = (((asciiNum2 + 65 - offset2) % 26) + 65);
      } else if (asciiNum2 >= 97 && asciiNum2 <= 122) {
        asciiNum2 = (((asciiNum2 + 97 + offset2) % 26) + 97);
      }
      newString2 += String.fromCharCode(asciiNum2);
    }
    return newString2;
  }
};

export default cipher;