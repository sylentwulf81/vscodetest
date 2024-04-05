// Create a function that will count the number of items in an HTML list and return the count as a number
const cardTypes =["planeswalker", "creature", "instant", "sorcery", "artifact", "enchantment", "land", "battle"]

// Planeswalkers
function countPlaneswalkers() {
    let myList = document.getElementById("planeswalkers").getElementsByTagName("li")
    let myListValue = myList.length;
    return myList.length;
}

let count = countPlaneswalkers();
console.log(count)
let countElement = document.getElementById("planeswalkerCount")
if (countElement !== null) {
    countElement.innerText = count;
}

// Creatures