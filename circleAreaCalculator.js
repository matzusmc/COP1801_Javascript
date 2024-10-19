// Ask the user for their first name and store it in a variable
let Fname = prompt("Please enter your first name:");

// Display a welcome message that contains the name the user entered
alert("Welcome, " + Fname + "!");

// Create a constant to store the value of Pi with 7 significant digits
const piValue = 3.1415926;

// Ask the user to input their favorite number and store it in a variable
let myFavNum = prompt("Please enter your favorite number (this will be the radius of a circle):");

// Convert the input to a number (since prompt returns a string)
myFavNum = Number(myFavNum);

// Calculate the area of a circle using the user's favorite number as the radius
let myArea = piValue * myFavNum * myFavNum;

// Create a message that includes the contents of each variable with a description
let message = `
  Hello ${Fname}, here are your details:
  - Your favorite number is: ${myFavNum}
  - The value of Pi used: ${piValue}
  - The area of a circle with radius ${myFavNum} is: ${myArea.toFixed(2)}
`;

// Display the message on the webpage
document.write("<pre>" + message + "</pre>");
