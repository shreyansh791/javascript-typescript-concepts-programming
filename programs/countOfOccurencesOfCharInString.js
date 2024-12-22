function countCharsOccurences(inputString) {
    intputString = inputString.toLowerCase();

    const characterCount = {}
    for (const character of intputString) {
        if (characterCount[character]) {
            characterCount[character]++;
        }
        else {
            characterCount[character] = 1;
        }
    }
    return characterCount;

}

function countCharsOccurencesUsingMap(inputString) {
    intputString = inputString.toLowerCase();

    const characterCount = new Map();
    for (const character of intputString) {
        characterCount.set(character, (characterCount.get(character) || 0) + 1);
    }
    return characterCount;
}

function countCharsOccurencesUsingReduce(inputString) {
    inputString = inputString.toLowerCase();
    return [...inputString].reduce((characterCount, char) => {
        characterCount[char] = (characterCount[char] || 0) + 1;
        return characterCount;
    }, {});
}



console.log(countCharsOccurences('javascript'));
console.log(countCharsOccurencesUsingMap('javascript'));
console.log(countCharsOccurencesUsingReduce('javascript'));
