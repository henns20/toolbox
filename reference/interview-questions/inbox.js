// Source: https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea#.odxbxrki
// 1. Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array.

var myArray = [1, 2, 3];
var newArray;

function double(arr) {
    return arr.map(function(element) {
        return element * 2;
    });
}
newArray = double(myArray);
// console.log('New rate equals: ' + newArray);


// 2. Write a function called add which takes in an array and returns the result of adding up every item in the array

function add(arr) {
    return arr.reduce(function(previous, next) {
        console.log(previous, next);
        return previous + next;
    }, 0);
}

var reducedValue = add(myArray);
console.log(reducedValue);

//3. Using jQuery (or vanilla JavaScript), add a click event handler to the element which has an id of “btn”. When clicked, toggle (add or remove) the “highlight” class as well as change the text to “Add Highlight” or “Remove Highlight” depending on the current state of the element.

var myButton = document.getElementById('btn');

// using the vanilla javascript
// uses the elements classList property
//  & classList methods

function toggleHighlightClass() {
    if (myButton.classList.contains('highlight')) {
        myButton.
    }
    myButton.classList.toggle('highlight');
}
