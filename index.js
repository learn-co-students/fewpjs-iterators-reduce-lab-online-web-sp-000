const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let sum = 0;

const totalBatteries = batteryBatches.reduce((acc, val) => {
  return acc + val;
}, 0);







// function totalBatteries(num) { 
//   let sum = num.reduce((a, c) => {
//     return a + c;
//   });
//   return sum;
// }










// let total = [ 0, 1, 2, 3 ].reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   0
// )

// let arr = [1,2,3,4];
// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// });