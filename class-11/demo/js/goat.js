/*
  FILE: goat.js
  DATE: 2022-07-05
  AUTHOR: Code Fellows
  DESCRIPTOION: handle the clicking of goats.
*/
"use strict";

/* ****************************************************************************
    GLOBAL VARIABLES
**************************************************************************** */
var goatContainer; // HTML element for goats
var resultButton; // a button to show results
var image1; // an image element
var image2; // an image element
var allGoatsArray; // an array of goat objects
var clicks = 0; // the number of user clicks
var maxClicksAllowed = 9; // the maximum number of clicks

/* ****************************************************************************
    GOAT OBJECTS (Data/Model Objects)
**************************************************************************** */

/**
 * Constructor for Goat objects.
 *
 * @param {string} name - the name of the goat
 * @param {string} src - path and file name for an image of the goat
 */
function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

/* ****************************************************************************
    VIEW LOGIC
**************************************************************************** */

/**
 * Draw two random goats on the page.
 */
function render() {
  console.log(`In render()`);
  // Get two random goats
  let goat1 = getRandomGoatIndex();
  let goat2 = getRandomGoatIndex();
  // Make sure they are not the same goat
  while (goat1 === goat2) {
    goat2 = getRandomGoatIndex();
  }
  // Set the image values
  image1.src = allGoatsArray[goat1].src;
  image1.alt = allGoatsArray[goat1].name;
  image2.src = allGoatsArray[goat2].src;
  image2.alt = allGoatsArray[goat2].name;
  // increment the view counts
  allGoatsArray[goat1].views++;
  allGoatsArray[goat2].views++;
}

/**
 * Display the results of all the clicking.
 */
function renderResults() {
  console.log(`In renderResults()`);
  let ul = document.querySelector("ul");
  for (let i = 0; i < allGoatsArray.length; i++) {
    let goat = allGoatsArray[i];
    let li = document.createElement("li");
    li.textContent = `${goat.name} had ${goat.views} views and was clicked ${goat.clicks} times.`;
    ul.appendChild(li);
  }
}

/* ****************************************************************************
    CONTROL LOGIC
**************************************************************************** */

/**
 * Initialize the global variables, set up needed event handlers, and
 * perform the initial render.
 */
function initialize() {
  console.log(`In initialize()`);
  // Get initiall references to HTML elements
  goatContainer = document.querySelector("section");
  resultButton = document.querySelector("section + div");
  image1 = document.querySelector("section img:first-child");
  image2 = document.querySelector("section img:nth-child(2)");
  // instantiate goats
  allGoatsArray = [];
  allGoatsArray.push(new Goat("Kissing Goat", "./images/kissing-goat.jpg"));
  allGoatsArray.push(new Goat("Sassy Goat", "./images/sassy-goat.jpg"));
  allGoatsArray.push(new Goat("Smiling Goat", "./images/smiling-goat.jpg"));
  allGoatsArray.push(new Goat("Sweater Goat", "./images/sweater-goat.jpg"));
  allGoatsArray.push(new Goat("Cruisin Goat", "./images/cruisin-goat.jpg"));
  allGoatsArray.push(
    new Goat("Float Your Goat", "./images/float-your-goat.jpg")
  );
  allGoatsArray.push(
    new Goat("Goat Out of Hand", "./images/goat-out-of-hand.jpg")
  );
  // Set any event handlers
  goatContainer.addEventListener("click", handleGoatClick);
  // perform the initial render
  render();
}

/**
 * Handles the clicking of a goat.
 *
 * @param {event} evt - the event object
 */
function handleGoatClick(evt) {
  console.log(`In handleGoatClick()`);
  // Test to see if we have clicked an image
  if (evt.target === goatContainer) {
    alert("Please click on an image.");
  }
  clicks++;
  // We don't know which random goat was clicked, so loop through them
  // to see if any match the event target
  let clickGoat = evt.target.alt;
  for (let i = 0; i < allGoatsArray.length; i++) {
    if (clickGoat === allGoatsArray[i].name) {
      allGoatsArray[i].clicks++;
      break;
    }
  }
  // See if we have made it to the maximum number of clicks
  if (clicks === maxClicksAllowed) {
    // Remove teh event listener
    goatContainer.removeEventListener("click", handleGoatClick);
    // Enable the display results button
    resultButton.addEventListener("click", renderResults);
    resultButton.className = "clicks-allowed";
    goatContainer.className = "no-voting";
  } else {
    render();
  }
}

/**
 * Returns a random index from the allGoatsArray
 *
 * @returns {number} - an index from the array
 */
function getRandomGoatIndex() {
  return Math.floor(Math.random() * allGoatsArray.length);
}

/* ****************************************************************************
    END OF FILE
**************************************************************************** */
