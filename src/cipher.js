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
  }
};

export default cipher;
