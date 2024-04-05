let square = a => {
    return (a * a);
};
console.log(square(4));

function getLast(sentence) {
    let finalCharacter = (sentence.length - 1);
    return sentence[finalCharacter];
}

// 

function properCaps(textInput) {
    let firstCharacter = textInput.substring(0,1);
    console.log(firstCharacter)
}

console.log(properCaps("i like monkeys"));