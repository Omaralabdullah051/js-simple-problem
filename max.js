const business = 850;
const minister = 1650;
const army = 900;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Minister er pola is bigger');
// }


function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
console.log('Largest is:', (findLargest(354, 241)));

// compare with 3 
/*if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
}*/

// task 1: create a function that takes three number as input parameter and returns you the largest number of theree 

var max = Math.max(business, minister, army);
console.log('largest is:', max);

// Task 2: write a function to find the smallest of three numbers 

// write a function and find out the largest of three numbers 
function largestNumber(number1, number2, number3) {
    const largest = Math.max(number1, number2, number3);
    return largest;
}
console.log('The largest number is:', largestNumber(202, 100, 1000));

// write a function and find out the smallest of three numbers 
function lowestNumber(number1, number2, number3) {
    const lowest = Math.min(number1, number2, number3);
    return lowest;

}
console.log((lowestNumber(-101, 0, -1000)));