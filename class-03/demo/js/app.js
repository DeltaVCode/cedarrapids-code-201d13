/*

  FILE: app.js
  DATE: 2022-06-22

*/
"use strict";

// Global variables
var userName;
var userPoints = 0;
var foodsILike;

/**
 * This initializes code on page load.
 */
function initialize() {
  console.log(`In initialize()`);
  foodsILike = ["tatertots", "tortilla chips", "popcorn", "kale"];
  // handleNameThing();
  console.log(`****\nUse the buttons\n****`);
}

/**
 * Plays a guessing game related to favorite foods.
 */
function playGame() {
  console.log(`In playGame()`);
  // Question the user
  let answer = prompt(
    "Is one of the favorite foods popcorn? (type yes or no)"
  ).toLowerCase();
  // Check the user's response
  let result = "Wrong!";
  if (answer === "yes" || answer === "y") {
    userPoints++;
    result = `You have ${userPoints} points.`;
  }
  // Display points
  alert(result);
}

/**
 * Demonstrate some things using arrays.
 */
function demoArrays() {
  console.log(`In demoArrays()`);

  console.log(`This is the initial array`);
  console.table(foodsILike);

  console.log(`Looping through the array`);
  for (let index = 0; index < foodsILike.length; index++) {
    console.log(`Item: ${foodsILike[index]}`);
  }

  let food = "swiss chard";
  console.log(`Adding ${food}`);
  foodsILike.push(food);
  console.table(foodsILike);

  // popping
  food = foodsILike.pop();
  console.log(`Popped ${food} from array`);
  console.table(foodsILike);

  // unshift
  food = "spinach";
  console.log(`Adding ${food}`);
  foodsILike.unshift(food);
  console.table(foodsILike);

  // indexOf
  food = "popcorn";
  let index = foodsILike.indexOf(food);
  console.log(`Index of ${food} is ${index}.`);

  // Illustrates complex arrays that should probably be avoided
  let mixedUp = ["yeehaw", 42, true, ["yo"], {}];
  console.table(mixedUp);
}
