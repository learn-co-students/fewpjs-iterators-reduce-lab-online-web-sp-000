const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// should have a number as a result
// should have made the sum of all the assembled batteries,
let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total }, 0)