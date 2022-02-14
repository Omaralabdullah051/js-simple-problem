// x = base and y = power;
console.log(Math.pow(5, 2));
console.log(Math.pow(5, 3));
console.log(Math.pow(2, 3));
// the positive square root of x 
console.log(Math.sqrt(144));
// the cube root of x 
console.log(Math.cbrt(125));

function maxNumber(number1, number2, number3) {
    let max = Math.max(number1, number2, number3);
    return max;
}
console.log('The max number is:', (maxNumber(20, 40, 10)));

function minNumber(number1, number2, number3) {
    let min = Math.min(number1, number2, number3);
    return min;
}
console.log('The min number is:', (minNumber(30, 100, -2)));

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum;
}
console.log((sumNumbers([-2, 25, 37, 92, 85])));

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
console.log((largestElement([-32, 70, 48, 85, 122, 2, 7])));


function lowestElement(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
console.log((lowestElement([-2, -10, 77, 85, -777, -23, 7, 8, -2])));

function fibonacciSeries(numbers) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= numbers; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
console.log((fibonacciSeries(10)));

function fibonacciSeries(numbers) {
    let fibonacci = [0, 1];
    for (let i = 2; i < numbers; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
console.log((fibonacciSeries(15)));