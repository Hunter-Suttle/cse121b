/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Hunter Suttle';
let currentYear = '2023';
let profilePicture = '/images/ProfessionalPhoto3.0.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("#profile-img");


/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${fullName}</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ["pizza", "ice cream", "sushi", "salad"];

for (let i = 0; i < favoriteFoods.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = favoriteFoods[i];
  foodElement.appendChild(listItem);
}

let newFood = "cake";

favoriteFoods.push(newFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

let removedFood = favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

let poppedFood = favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;