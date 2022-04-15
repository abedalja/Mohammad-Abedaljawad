"strict mode";

maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

maxOfThree = (num1, num2, num3) => {
  if (num1 > (num2 && num3)) {
    return num1;
  } else if (num2 > (num1 && num3)) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxOfTwoNumbers(2, 3));
console.log(maxOfThree(2, 3, 4));

// ////////////////////////////////////////////////////////////////////

isCharacterAVowel = (char) => {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLocaleLowerCase === vowels[i].toLocaleLowerCase) {
      return true;
    }
  }

  return false;
};

console.log(isCharacterAVowel("e"));

// ////////////////////////////////////////////////////////////////////

sumArray = (arr) => {
  let sum = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
    sum += array[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 5, 3, 2, 1, 1]));

// ////////////////////////////////////////////////////////////////////

sumArray = (arr) => {
  let multiplaction = 1;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
    multiplaction *= array[i];
  }
  return multiplaction;
};
console.log(sumArray([3, 3, 3, -1]));

// ////////////////////////////////////////////////////////////////////

reverString = (word) => {
  let splitS = word.split("");

  let reve = splitS.reverse();

  let joinArr = reve.join("");

  return joinArr;
};

console.log(reverString("Hello"));

// ////////////////////////////////////////////////////////////////////

function arguments(...value) {
  return value.length;
}
console.log(arguments("hello", "hi", 7, "yo"));

////////////////////////////////////////////////////////////////////

function findLongestWord(word) {
  let wordSplit = word.split(" ");
  let longestWord = 0;
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i].length > longestWord) {
      longestWord = wordSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("hello my name is moe"));

// // ////////////////////////////////////////////////////////////////////

function filterLongWords(arr, number) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > number) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(filterLongWords(["hello", "hi", "good", "how"], 9));

// // ////////////////////////////////////////////////////////////////////

function occur(str) {
  str = str.toLowerCase();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(occur("moemoemoe"));
