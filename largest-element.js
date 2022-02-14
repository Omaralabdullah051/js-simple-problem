function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
// console.log((largestElement([12, 15, 17, 19, 54, 2, 32])));
// const oldest2 = largestElement([85, -6, -17, 6, 32, 105]);
// console.log(oldest2);

// task: find the lowest element in an array; 

// find out the largest element in an array 
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
// console.log('The largest number of this array is:', (largestElement([-12, 27, 40, 22, 16, 8, 101, 292, -16, -101, -777, 777, 2])));

// find out the lowest element in an array 
function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return (lowest);
}
// console.log('The lowest number of this array is:', (lowestElement([-26, -28, 404, 56, 41, -101, 707, 0, -1])));

// find out the largest element in an array 
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
console.log('The largest number of this array is:', largestElement([2, -101, 505, 102, 103, -92, 400, 0, -1700, 2]));