'use strict';
console.log('app file is connect!');




function Pet(petName, interests, isGoodWithKids, isGoodWithCats, isGoodWithDogs,imageName){
  this.petName = petName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.imageName = imageName;
}


Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + 'Months old.';
};

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth + 1) + minMonth);
}

Pet.prototype.getInterests = function(){
  let randomIndexArray = Math.floor((Math.random() * this.interests.length));
  console.log('pet interests:',randomIndexArray);
  return this.interests[randomIndexArray];
};

Pet.prototype.render = function(){
  let parentElement = document.getElementById('kittenProfiles');
  console.log(parentElement);
  // <article>
  let article = document.createElement('article');
  parentElement.appendChild(article);

  let petH2 = document.createElement('h2');
  petH2.textContent = this.petName;
  parentElement.appendChild(petH2);
  
  // create p
  let petPara = document.createElement('p');
  petPara.textContent = 'Cats are cool, and pet one is ' + this.age;
  article.appendChild(petPara);
  // <ul>
  //   <li></li>
  // </ul>
  // create ul
  let petUl = document.createElement('ul');

  article.appendChild(petUl);

  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    // console.log(petLi);
    petLi.textContent = this.interests[i];
    petUl.appendChild(petLi);
  }
  //create img
  let petOneImage = document.createElement('img');
  /* <img src="image/diabloBlanco.jpeg" */
  petOneImage.setAttribute('src', 'images/' + this.imageName);
  petOneImage.setAttribute('alt', 'Adopt our pet kittens');
  article.appendChild(petOneImage);



  //Last thing to do is create a table.
  let petTable = document.getElementById('adoptPets-table');
  let petRow = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.petName;
  petRow.appendChild(nameCell);

  let kidsPets = document.createElement('td');
  kidsPets.textContent = 'Is good with Kids: ' + this.isGoodWithKids;
  petRow.appendChild(kidsPets);

  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  let petInterests = document.createElement('td');
  petInterests.textContent = this.interests;
  petRow.appendChild(petInterests);


  petTable.appendChild(petRow);


};






// create (aka instantiate) some Kittens
const frankie = new Pet('Frankie', ['cuddling', 'chasing string', 'catnip'], true, true, true, 'tommyBob.jpeg');

const serena = new Pet('Serena', ['sitting in laps', 'climbing curtains', 'eating treats'], false, true, false, 'littleDragon.jpeg');

const jumper = new Pet('Jumper', ['sunbeams', 'yarn', 'milk', 'paper bags'], false, true, true, 'jumper.jpeg');


frankie.setAge();
frankie.getInterests();
frankie.render();


serena.setAge();
serena.getInterests();
serena.render();

jumper.setAge();
jumper.getInterests();
jumper.render();




let allPets = [frankie, serena,jumper];
console.log('do we get pets?', allPets);
