// Arrays

/* 
How do we skip code? 
    If statements!

How do we repeat code? 
    While loops!

How do we store code for later use? 
    A function!

How do we store a single value? 
    A variable! 

How do we store multiple values? 
    More variables! (An array!)
    An array is a list of values
*/

let planets = [
    "Mercury", 
    "Venus",
    "Earth", 
    "Mars", 
    "Jupiter",
    "Saturn",
    "Uranus", 
    "Neptune", 
    "Pluto"
]

console.log(planets)
console.log(planets.length)

let i = 0

while (i < planets.length) {
    console.log[i];
    i = i + 1
};

// oppositeDay

function oppositeCase(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      let newChar;
  
      if (char >= 'a' && char <= 'z') {
        newChar = char.toUpperCase();
      } else if (char >= 'A' && char <= 'Z') {
        newChar = char.toLowerCase();
      } else {
        // Handle non-alphabetic characters (optional)
        newChar = char;
      }
  
      result += newChar;
    }
  
    return result;
  }
  
  console.log(oppositeCase("hELLO")); // Output: HeLlO
  console.log(oppositeCase("Hello, World!")); // Output: hELLO, wORLD!

