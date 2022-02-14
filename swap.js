var first = 5;
var second = 7;
console.log(first, second);
// // first approach 
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring 
[first, second] = [second, first];
console.log(first, second);


var third = 8;
var forth = 9;
console.log(third, forth);
// var temp = third;
// third = forth;
// forth = temp;
// console.log(third, forth);


// destructing 
[third, forth] = [forth, third];
console.log(third, forth);


var fifth = 8;
var sixth = 10;
// console.log(fifth, sixth);
// var temp = fifth;
// fifth = sixth;
// sixth = temp;
// console.log(fifth, sixth);

// destructing 
[fifth, sixth] = [sixth, fifth];
console.log(fifth, sixth);
