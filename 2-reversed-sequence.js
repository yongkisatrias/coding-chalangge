// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Build a function that returns an array of integers from n to 1 where n>0. Example : n=5 --> [5,4,3,2,1]

// 1. First Answer
// const reverseSeq = (n) => {
//     const result = [];
//     for (let index = n; index >= 1; index--) {
//         result.push(index);
//     }
//     return result;
//   };

// 2. Second Answer
// reverseSeq = (n) => {
//     return Array(n)
//     .fill()
//     .map((element, index) => index + 1)
//     .reverse();
// };

// 3. Third Answer
// const reverseSeq = (n) => [...Array(n)].map((element, index) => index + 1).reverse();

// 4. Fourth Answer
const reverseSeq = (n) => [...Array(n)].map((element, index) => n - index);

  console.log(reverseSeq(5));