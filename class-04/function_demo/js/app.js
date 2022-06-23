/*
  FILE: app.js
  @date  2022-06-23
  @author Code Fellows


To create a function

1) write the function keyword
2) follow with the name and parenthesis
3) Put any parameters inside the parenthesis
4) write the function comment using /**
	-	Description of the function (what it does but not how)
	-	@param {data type} paramater_name - parameter description
	-	@return {data type} - description of return value (if there is one)
5)	Fill in the body of the function

NOTE:	Each function should do only one thing thing (single responsibility principle)



*/

/**
 * Initializes and runs application logic.
 */
function initialize() {
  console.log("In initialize()");
  let name = getName();
  sayHello(name);
  let response = showYessOrNoPrompt("Is today a week day?");
  console.log(response);
  sayGoodbye(name);
}

/**
 * Prompts the user for their name and returns that name.
 *
 * @return {string} - the name of the user
 */
function getName() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let fullName = buildFullName(firstName, lastName);
  return fullName;
}

/**
 * Puts the first and last names together, separated by a space, and
 * placed in one string.
 *
 * @param {string} firstName - the first name of the user
 * @param {string} lastName - the last name of the user
 * @return {string} - the full name of the user
 */
function buildFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

/**
 * Displays a greeting to the visitor.
 *
 * @param {string} fullName - the full name of the visitor
 */
function sayHello(fullName) {
  alert(`Hello, ${fullName}`);
}

/**
 * Prompt the user for yes/no input, translate the input, and return a
 * normalized response.
 *
 * @param {string} promptText - the text to show to the user
 * @return {string} - the user response
 */
function showYessOrNoPrompt(promptText) {
  let userInput = prompt(promptText);
  let response = "Undefined";
  if (userInput.length > 0) {
    let userChar = userInput.charAt(0).toLowerCase();
    if (userChar === "y") {
      response = "Yes";
    } else if (userChar === "n") {
      response = "No";
    } else {
      response = "Confused";
    }
  }
  return response;
}

/**
 * Display a goodbye message to the user.
 *
 * @param {string} name  - the name of the user
 */
function sayGoodbye(name) {
  alert(`Goodbye, ${name}`);
}
