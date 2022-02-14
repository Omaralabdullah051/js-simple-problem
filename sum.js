const numbers = [44, 23, 534, 32, 54, 5, 78];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum += element;
    }
    return sum;
}

// console.log('array total:', (arrayTotal([32, 45, 67])));

// get the sum or total in an array 
function arrayTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        total += element;
    }
    return total;
}
console.log((arrayTotal([204, -202, 294, 50, 60])));
