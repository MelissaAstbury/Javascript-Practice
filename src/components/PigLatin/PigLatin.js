//ANSWERS ARE IN THE CONSOLE

const translatePigLatin = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const firstChar = str[0];

  if (vowels.indexOf(firstChar) > -1) {
    return `${str}way`;
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      const slicedChars = str.indexOf(str[i]);
      const newArr = str.slice(0, slicedChars);
      if (slicedChars > 1) {
        return str.slice(i).concat(newArr) + "ay";
      } else {
        return str.slice(i).concat(str[0]) + "ay";
      }
    }
  }

  return str + "ay";
};

console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("olves"));
console.log(translatePigLatin("hello"));
console.log(translatePigLatin("cheese"));

export default translatePigLatin;
