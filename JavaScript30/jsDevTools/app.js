const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
console.log("hello");

// Interpolated
// console.log(`Hello ${var}`)

// Styled
console.log("%c I am some great text", "font-size:50px; background:red;")

// warning!
console.warn("Oh no!");
// Error :|
console.error("Oh no!");
// Info
console.info("Crocodiles eat 3-4 people per year")

// Testing test si quelque chose est faux
console.assert(1 === 2, "That is wrong!")
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!")

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p) //permet de voir toutes les methods, proprety, ...
console.clear();
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  });

// counting, nous dit combien de fois nous utilisons une valeur par exemple
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing voir la durée de quelque chose
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
