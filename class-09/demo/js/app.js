/**
 * @file app.js
 * @date 2022-06-30
 * @author Code Fellows
 * @description Kittens
 *
 */
"use strict";

/* ************************************************************************ */
// GLOBAL VARIABLES
/* ************************************************************************ */
var kittens; // an array of kitten objects

/* ************************************************************************ */
// KITTEN CODE (Model)
/* ************************************************************************ */

/**
 * The constructor for Kitten objects - this is the prototype style, not the
 * new class-based style.
 *
 * @param {string} name - name of the kitten
 * @param {array} interests - an array of strings
 * @param {boolean} isGoodWithKids - true if good with kids
 * @param {boolean} isGoodWithDogs - true of good with dogs
 * @param {boolean} isGoodWithOtherCats - true if good with other cats
 */
function Kitten(
  name,
  interests,
  isGoodWithKids,
  isGoodWithDogs,
  isGoodWithOtherCats
) {
  // this is a capital K kitten because it's a constructor function
  this.name = name;
  this.age = Math.floor(Math.random() * (12 - 3 + 1) + 3) + " months";
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
}

/**
 * add assignAge method - here we define the function inline
 */
// Kitten.prototype.assignAge = function () {
//   // the random months number must be persisted so we can use more than once
//   let months = Math.floor(Math.random() * (12 - 3 + 1) + 3);
//   this.age = months + " months";
//   //this.ageInCatYears = months.calculateAgeInHumanYears();
// };

/* ************************************************************************ */
// CONTROL CODE (controller)
/* ************************************************************************ */
function initialize() {
  console.log(`In initialize()`);
  // intialize kittens
  kittens = [];
  kittens.push(new Kitten("Percy", ["eating", "sleeping"], true, false, true));
  kittens.push(new Kitten("Tiger", ["eating", "sleeping"], true, false, true));
  kittens.push(new Kitten("Lazy", ["eating", "sleeping"], true, false, true));
  console.table(kittens);
  // do initial display of kittens
  render(kittens);
}

/* ************************************************************************ */
// VIEW CODE (view)
/* ************************************************************************ */

/**
 * Build a table body with kitten data.
 *
 * Note: kittens is actually a global variable, but I'm passing it is as a
 * parameter to demonstrate a common practice.  We often hav functions like
 * this one in separate files that may not be able to reach some of our global
 * variables.
 *
 * @param {array} kittens - an array of kittens
 */
function render(kittens) {
  let kittenTable = document.getElementById("kittenTable");
  // Clear previous records
  kittenTable.innerHTML = "";
  // Draw the records
  for (let i = 0; i < kittens.length; i++) {
    let kitten = kittens[i];
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = kitten.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = kitten.age;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = kitten.interests.join(", ");
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = kitten.isGoodWithKids;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = kitten.isGoodWithDogs;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = kitten.isGoodWithOtherCats;
    tr.appendChild(td);
    kittenTable.appendChild(tr);
  }
}

/**
 * Validates the form to add a kitten.  If the data is valid, adds a new kitten
 * object to the kittens array and then calls for the page to be rendered again.
 */
function addKitten() {
  console.log(`In addKitten()`);
  let good = true; // flags whether the form input is good
  let name = document.getElementById("kittenName").value.trim();
  if (name === "") {
    // Name is required!
    good = false;
    let span = document.getElementById("kittenNameError");
    span.innerText = "Name cannot be blank!";
    let br = document.createElement("br");
    span.appendChild(br);
  }
  let interests = document.getElementById("interests").value;
  interests = interests.split(",");
  let kids = document.getElementById("kids").checked;
  let dogs = document.getElementById("dogs").checked;
  let cats = document.getElementById("cats").checked;
  if (good) {
    let kitten = new Kitten(name, interests, kids, dogs, cats);
    kittens.push(kitten);
    render(kittens);
    // If this is good, then go through the form elements and reset them
    // to blank so they are ready for the next kitten to be added.
    // Include clearing the error messages.
  }
}
