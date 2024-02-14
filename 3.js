let fruits = ['apple', 'Banana', 'Cherry', 'Avocado', 'Blueberry'];
fruits.sort();

function displayFruitsList(fruits) {
  document.write(`<ul>${fruits.map(fruit => `<li>${fruit}</li>`).join('')}</ul>`);
}
displayFruitsList(fruits);

function findFruitIndex(fruits, fruitName) {
  fruitName = fruitName.toLowerCase();
  return fruits.findIndex(fruit => fruit.toLowerCase() === fruitName);
}

let index = findFruitIndex(fruits, 'avocado');
if (index !== -1) {
  document.write(`The index of Avocado is: ${index}`);
} else {
  document.write(`Avocado not found`);
}