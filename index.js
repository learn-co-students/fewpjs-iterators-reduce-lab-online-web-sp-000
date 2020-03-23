const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryTotaller = (total, batteryBatch) => total + batteryBatch
let totalBatteries  = batteryBatches.reduce(batteryTotaller, 0)
