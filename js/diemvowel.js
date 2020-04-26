function disemvowel(str) {
  //take in a string
  //convert the string to array
  //remove the elements that match a, e, i, o, u
  //return the array back to a string
  //using replace function: cannot work
  arrayString = str.split("");
  newString = "";
  for (let i = 0; i < arrayString.length; i++) {
    if (
      arrayString[i] == "a" ||
      arrayString[i] == "A" ||
      arrayString[i] == "e" ||
      arrayString[i] == "E" ||
      arrayString[i] == "i" ||
      arrayString[i] == "I" ||
      arrayString[i] == "o" ||
      arrayString[i] == "O" ||
      arrayString[i] == "u" ||
      arrayString[i] == "U"
    ) {
      arrayString[i] = "";
    }
    newString += arrayString[i];
  }

  console.log(newString);
}

disemvowel("This website is for losers LOL!");
disemvowel("website");
