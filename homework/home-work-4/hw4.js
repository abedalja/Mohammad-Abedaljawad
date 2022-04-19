"strict mode";

// Objects - Evaluating Keys ///////////////////////////////////////////////////////////

const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!",
};
let total = 0;

for (const number in sumMe) {
  if (typeof sumMe[number] === "number")
    // console.log(sumMe[number])
    total += sumMe[number];
}
console.log(total);

// For Loops - Calculating Array Elements////////////////////////////////////////////////////

const increaseByTwo = [1, 2, 3, 4, 5];

for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] += 2;
}

console.log(increaseByTwo);

// Arrays - Adding Elements//////////////////////////////////////////////////////

const netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

netflixShows.push("The Last Kingdom");

console.log(netflixShows);

// array//////////////////////////////////////////////////////
const horror = ["Freddy", "Jason", "Michael", "Ghostface", "Chucky"];

let fourthItem = horror[3];

console.log(fourthItem);

// for loops //////////////////////////////////////////////////////

const synonyms = ["fantastic", "wonderful", "great"];
const greetings = [];

for (let i = 0; i < synonyms.length; i++) {
  greetings.push(synonyms[i]);
}

// console.log(greetings)

for (let i = 0; i < greetings.length; i++) {
  console.log(`have a ${greetings[i]} day `);
}
// //////////////////////////////////////////////////////

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'
for (let i = 0; i < firstNames.length; i++) {
  bios.push(
    `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
  );
}

console.log(bios);

//////////////////////////////////////////////////////////////////////////////////////

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};

for (let i = 0; i < possibleIterable.length; i++) {
  if (possibleIterable[i] % 3 === 0) {
    divByThree[possibleIterable[i]] = i;
  }
}

console.log(divByThree);
