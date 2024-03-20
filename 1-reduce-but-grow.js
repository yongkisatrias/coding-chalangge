// https://www.codewars.com/kata/57f780909f7e8e3183000078
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// 1. First Answer
// function grow(x) {
//     let result = x[0];
//     for (let index = 1; index < x.length; index++) {
//         result = result * x[index];
//     }
//     return result;
// }

// 2. Second Answer
// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr, 1)
//     return result;
// }

// 3. Third Answer
const grow = (x) =>  x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1,2,3,4]));