const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let total = 0
let totalBatteries = batteryBatches.reduce((total, element) => element + total)
