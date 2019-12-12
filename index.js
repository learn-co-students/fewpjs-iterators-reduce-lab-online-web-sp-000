const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = 0;


batteryBatches.reduce((accumulator, currentElement) => {
  return totalBatteries += currentElement;
}, totalBatteries)


console.log(totalBatteries)
