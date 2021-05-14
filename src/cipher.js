const cipher = {
  encode: (string, offset) => {
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

  decode: (stringTwo, offsetTwo) => {
    let newStringTwo = "";
    for (let i = 0; i < stringTwo.length; i++) {
      let asciiNumTwo = stringTwo.charCodeAt(i);
      if (asciiNumTwo >= 65 && asciiNumTwo <= 90) {
        asciiNumTwo = (((asciiNumTwo - 65 - offsetTwo) % 26) + 65);
      } else if (asciiNumTwo >= 97 && asciiNumTwo <= 122) {
        asciiNumTwo = (((asciiNumTwo - 97 - offsetTwo) % 26) + 97);
      }
      newStringTwo += String.fromCharCode(asciiNumTwo);
    }
    return newStringTwo;
  },
};

export default cipher;
