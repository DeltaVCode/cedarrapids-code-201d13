/**
 * @file car.js
 * @date 2022-07-07
 * @author Bob
 * @description constructor and related functions for cars.
 *
 * NOTE: Load this BEFORE the app.js so that it will be available for use
 */
"use strict";

/**
 *
 * @param {string} make - the manufacturer of the car
 * @param {string} model - the model of the car
 * @param {number} modelYear - the year of the car
 */
function Car(make, model, modelYear) {
  this.vin = 2;
  this.make = make;
  this.model = model;
  this.modelYear = modelYear;
}

/**
 * Constructor for an object that manages the cars in localstorage
 */
function CarCollection() {
  this.cars = this.initialize();
}

/**
 *
 * @returns Array
 */
CarCollection.prototype.initialize = function () {
  let key = "cars";
  let result = localStorage.getItem(key);
  if (result === null) {
    return [];
  } else {
    let resultObject = JSON.parse(result);
    // structure {data: []}
    return resultObject.data;
  }
};

/**
 * Add a car to the collection
 *
 * @param {Car} car - the car to add
 */
CarCollection.prototype.addCar = function (car) {
  // Add to the array
  this.cars.push(car);
  // Store the array to localstorage
  let tempObject = { data: this.cars };
  localStorage.setItem("cars", JSON.stringify(tempObject));
};

/**
 * Look for the original and replace its values with the values in the updated
 * car.  Remember to save back to localstorage after the change
 *
 * @param {Car} originalCar - the original values
 * @param {Car} updatedCar - the new values
 */
CarCollection.prototype.updateCar = function (originalCar, updatedCar) {};

/**
 * Remove a car from the array and then then update the localstorage.
 *
 * @param {Car} car - car to be deleted
 */
CarCollection.prototype.deleteCar = function (car) {};

/**
 * Returns a car with the matching feature.
 *
 * @param {string} feature - the feature to match to find a car
 */
CarCollection.prototype.readCar = function (feature) {};
