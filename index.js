// // Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"];


// function destructivelyAppendCat(name) {
//   cats.push(name);
// }

// function destructivelyPrependCat(name) {
//   cats.unshift(name);
// }

// function destructivelyRemoveLastCat() {
//   cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//   cats.shift();
// }

// function appendCat(name) {
//   const newCatsEnd = [...cats, name];
//   return newCatsEnd;
// }

// function prependCat(name) {
//   const newCatsBegin = [name, ...cats];
//   return newCatsBegin;
// }

// function removeLastCat() {
//   const lessCats = cats.slice(0, cats.length -1);
//   return lessCats;
// }

// function removeFirstCat() {
//   const firstLessCats = cats.slice(1);
//   return firstLessCats;
// }

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newArray = [...cats, name];
  return newArray;
}

function prependCat(name) {
  let newArray = [name, ...cats];
  return newArray;
}

function removeLastCat() {
  let newArray = cats.slice(0,cats.length - 1);
  return newArray;
}

function removeFirstCat() {
  let newArray = cats.slice(1,cats.length);
  return newArray;
}
