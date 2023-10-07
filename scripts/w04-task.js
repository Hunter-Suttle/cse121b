/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Hunter Suttle",
    photo: "https://hunter-suttle.github.io/cse121b/images/ProfessionalPhoto3.0.jpg",
    favoriteFoods: ['tacos', 'sushi', 'pasta', 'burgers', 'cookies'],
    hobbies: ['investing', 'basketball', 'cooking', 'entrepreneurship'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Puyallup, WA',
        length: '15 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Sumner, WA',
        length: '4 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Salt Lake City, UT',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'South Hill, WA',
        length: '1 year'
    }
);

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '3 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let img = document.querySelector('#photo');
img.src = myProfile.photo;
img.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
var ul = document.querySelector("#hobbies");

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement("li");
  li.textContent = hobby;
  ul.append(li);
});

/* Places Lived DataList */
let dl = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    dl.append(dt);
  
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.append(dd);
  });