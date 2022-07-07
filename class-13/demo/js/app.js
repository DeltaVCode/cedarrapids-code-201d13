/**
 * @file app.js
 * @date 2022-07-07
 * @author Example
 * @description Examples of localstorage
 *
 */
"use strict";

// Global variables
var cars;
var addCarButton;

function initialize() {
  console.log(`In initialize()`);
  let car = new Car("Example", "Deluxe", 2022);
  console.log(JSON.stringify(car));
  // get collection of cars from storage
  cars = new CarCollection();
  console.log(cars);
  // add event handler for button
  addCarButton = document.getElementById("addCarButton");
  addCarButton.addEventListener("click", handleAddCar);
  // display existing cars
  renderCars();
}

/**
 * Handle adding a new car from the form
 *
 * @param {event} evt - the event object
 */
function handleAddCar(evt) {
  console.log(`In handleAddCar()`);
  let make = document.getElementById("make").value;
  let model = document.getElementById("model").value;
  let modelYear = document.getElementById("modelYear").value;
  let aCar = new Car(make, model, modelYear);
  cars.addCar(aCar);
  renderCars();
}

/**
 * Draw the cars on the page
 */
function renderCars() {
  console.log(`In renderCars()`);
  let carData = document.getElementById("carData");
  carData.innerHTML = "";
  if (cars.cars.length === 0) {
    // there are no cars
    let message = document.createElement("p");
    message.textContent = "There are no cars to display";
    carData.appendChild(message);
  } else {
    // there are cars
    let ul = document.createElement("ul");
    for (let i = 0; i < cars.cars.length; i++) {
      let car = cars.cars[i];
      let li = document.createElement("li");
      let carString = `${car.modelYear} ${car.make} ${car.model}`;
      li.textContent = carString;
      ul.appendChild(li);
    }
    carData.appendChild(ul);
  }
}
