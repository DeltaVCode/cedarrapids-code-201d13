/*
  FILE app.js
  @date 2022-06-27
*/
"use strict";

// Global variables
var kittens;
var lastKittenIndex = 0;

/**
 * Initialize an array of kitten objects and draw the first one.
 */
function initialize() {
  console.log(`In initialize()`);
  // initialzie the kitten data - not usually done this way
  kittens = [];
  // Create a kitten object
  let frankie = {
    name: "Frankie",
    age: getRandomAge(3, 12),
    imageName: "frankie.jpeg",
    interests: ["cuddling", "chasing string", "catnip"],
    isGoodWithKids: true,
    isGoodWithDogs: false,
    isGoodWithOtherCats: true,
    getAge: function () {
      console.log(this.name);
      console.log(this.age);
    },
  };
  kittens.push(frankie);

  let jumper = {
    name: "Jumper",
    age: getRandomAge(3, 12),
    imageName: "jumper.jpeg",
    interests: ["cuddling", "stalking", "catnip"],
    isGoodWithKids: false,
    isGoodWithDogs: false,
    isGoodWithOtherCats: true,
    getAge: function () {
      console.log(this.name);
      console.log(this.age);
    },
  };
  kittens.push(jumper);

  let serena = {
    name: "Serena",
    age: getRandomAge(3, 12),
    imageName: "serena.jpeg",
    interests: ["cuddling", "sleeping", "world domination"],
    isGoodWithKids: false,
    isGoodWithDogs: false,
    isGoodWithOtherCats: false,
    getAge: function () {
      console.log(this.name);
      console.log(this.age);
    },
  };
  kittens.push(serena);
  // loop quicky through the kittens and log their info
  doQuickDemo();
  // Show on of the kittens on the index page
  displayRandomKitten();
}

/**
 * Loop through the kittens and display their name and age
 */
function doQuickDemo() {
  for (let i = 0; i < kittens.length; i++) {
    // kittens[i] is the current kitten object
    let output = `The kitten called ${kittens[i].name} is ${kittens[i].age} months old.`;
    console.log(`Index ${i}: ${output}`);
  }
}

/**
 * Derive an age in months as a random number.
 *
 * @param {number } min - the minimum number of months
 * @param {number} max - the maximum number of months
 * @returns {number} - the random age in months
 */
function getRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Displays a randomly selected kitten on the page
 */
function displayRandomKitten() {
  // Get a random index
  let randomIndex = getRandomKittenIndex();
  // Build an article with sub-elements for the kitten
  let display = buildKittenDisplay(kittens[randomIndex]);
  // get the div from the index page
  let div = document.getElementById("kittenProfiles");
  // clear the div and then add the article to the div
  div.innerHTML = "";
  div.appendChild(display);
}

/**
 * Return a random index that is not the same as the previous index.
 *
 * @returns {number} - the index
 */
function getRandomKittenIndex() {
  let number = 0;
  if (kittens.length > 1) {
    // Only do this part if there is more than one kitten
    let needed = true;
    while (needed) {
      let randomIndex = Math.floor(Math.random() * kittens.length);
      if (randomIndex !== lastKittenIndex) {
        number = randomIndex;
        lastKittenIndex = number;
        needed = false;
      }
    }
  }
  return number;
}

/**
 * Builds the HTML to display a kitten
 *
 * @param {kitten} kitten - a kitten object
 * @returns {Element} - An HTML element containing kitten display data
 */
function buildKittenDisplay(kitten) {
  // Use the document object to create an artlicle element
  let article = document.createElement("article");
  let h2 = document.createElement("h2");
  h2.innerText = kitten.name;
  article.appendChild(h2);
  // Add the age as a paragraph
  let p = document.createElement("p");
  p.innerText = `This kitten is ${kitten.age} months old.  It's interest are:`;
  article.appendChild(p);
  // list of interests
  let ul = document.createElement("ul");
  for (let i = 0; i < kitten.interests.length; i++) {
    let li = document.createElement("li");
    li.innerText = kitten.interests[i];
    ul.appendChild(li);
  }
  article.appendChild(ul);
  // image of the kitten
  let img = document.createElement("img");
  img.setAttribute("src", `images/${kitten.imageName}`);
  img.setAttribute("alt", `An image of the kitten ${kitten.name}`);
  article.appendChild(img);
  // return the article
  return article;
}
