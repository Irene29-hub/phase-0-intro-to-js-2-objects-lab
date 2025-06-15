// Write your solution in this file!
// This array will be manipulated by the functions.
let cats = ["Milo", "Otis", "Garfield"];

// Employee object for the new set of functions
let employee = {
  name: "Jane Doe",
  streetAddress: "123 Main St"
};

function getAllCats() {
  return [...cats];
}

function getCatAtIndex(index) {
  return cats[index];
}

function addCat(catName) {
  return [...cats, catName];
}

function appendCat(catName) {
  return [...cats, catName];
}

function prependCat(catName) {
  return [catName, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

function replaceCat(oldCatName, newCatName) {
  const index = cats.indexOf(oldCatName);
  if (index === -1) {
    return [...cats];
  }
  return [
    ...cats.slice(0, index),
    newCatName,              
    ...cats.slice(index + 1) 
  ];
}

function destructivelyAddCat(catName) {
  return cats.push(catName);
}

function destructivelyAppendCat(catName) {
  return cats.push(catName);
}

function destructivelyPrependCat(catName) {
  return cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function destructivelyReplaceCat(oldCatName, newCatName) {
  const index = cats.indexOf(oldCatName);
  if (index !== -1) {
    return cats.splice(index, 1, newCatName);
  }
  return [];
}

function destructivelyInsertCat(index, catName) {
  return cats.splice(index, 0, catName);
}

// --- Functions for Employee Object ---
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  
  return { ...employeeObject, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
  employeeObject[key] = value;
  return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
  const newEmployee = { ...employeeObject };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
  delete employeeObject[key];
  return employeeObject;
}
