const myReplace = (str, before, after) => {
  var string = document.location.toString();
  const newStr = string.split(" ");
  console.log(typeof document.location);
  const re = /(\b[a-z](?!\s))/gi;

  newStr.forEach((word) => {
    if (word === before) {
      const position = newStr.indexOf(word);
      newStr[position] = after;
      if (word[0] === word[0].toUpperCase()) {
        newStr[position] = newStr[position].replace(re, (x) => {
          return x.toUpperCase();
        });
        return newStr.join(" ");
      } else {
        newStr[position] = newStr[position].replace(re, (x) => {
          return x.toLowerCase();
        });
        return newStr.join(" ");
      }
    }
  });

  return newStr.join(" ");
};

myReplace("I think we should look up there", "up", "Down");

export default myReplace;
