// Code your solution here

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(function batTotal(num, bat) {
    return num + bat
})