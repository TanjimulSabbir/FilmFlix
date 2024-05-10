function wordBuilder(letters, positions) {
    const string = positions.map(position => letters[position]).join('');
    return string;
}

console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); // Output: ego
