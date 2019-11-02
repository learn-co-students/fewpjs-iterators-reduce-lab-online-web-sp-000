// How .reduce() works:

// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ];

// Solution 1:
//
// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     totalPrice += product.price;
//   });
//
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products));                   // 33.46


// Solution 2: further abstraction

// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }
//
// console.log(reduce(couponLocations, couponCounter, 0));                // 15

// -------------------------------------------------------

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce( (total, amount) => total += amount);

// function solution:
// const totalBatteries = () => {
//     return batteryBatches.reduce( (tot, amt) => tot += amt);
// }
