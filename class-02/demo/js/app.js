/*
    FILE: app.js
    DATE: 2022-06-21
    AUTHOR: Code Fellows
*/

"use strict";

/**
 * Initialize all the code when the page loads.
 */
function initialize() {
  console.log("in initialize()");
  handleRumble();
  handleBooleans();
  handleColors();
}

/**
 * Prompts user for rumble status
 */
function handleRumble() {
  let answer = confirm("Are you ready to rumble?");
  if (answer === true) {
    console.log("LET'S GET READY TO RUMBLE!");
  } else {
    console.log("Oh well then.");
  }
}

/**
 * Demonstrate using boolean values
 */
function handleBooleans() {
  // Set up some variables
  let myBool = false;
  let anotherBool = false;
  let thirdBool = true;

  // Boolean operators AND and OR
  if (myBool && thirdBool) {
    console.log(`myBool and thirdBool were both true`);
  } else if (myBool || anotherBool) {
    console.log(`myBool or anotherBool was true`);
  } else if (thirdBool) {
    console.log(
      `myBool was false and anotherBool was false, but thirdBool was true.`
    );
  } else {
    console.log(`Were any of the variables true?`);
  }
}

/**
 * Ask the user for their favorite color and respond.
 */
function handleColors() {
  let color = prompt("What is your favorite color?");
  // Convert the color to lowercase and evaluate it
  switch (color.toLowerCase()) {
    case "red":
      console.log(`Your favorite color is red`);
      break;
    case "blue":
      console.log(`Your favorite color is blue`);
      break;
    default:
      console.log(`I don't know what your favorit color is`);
  } // end of switch
  console.log(`finsihed with switch`);
}
