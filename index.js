const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(reducer, 0)

function reducer(num, total){
  return total += num
}