const string = "Привет! Как дела?";

console.log(getVowels(string));

function getVowels(string) {
  const vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  const arrayOfStringSymbols = [...string];
  let vowelsInString = "";
  for (let index = 0; index < arrayOfStringSymbols.length; index++) {
    const element = arrayOfStringSymbols[index];
    if (vowels.includes(element)) {
      vowelsInString += element;
    }
  }
  return vowelsInString;
}
