const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
const batteryReducer = (totalBatteries, num) => {
        return totalBatteries += num
}

const totalBatteries = batteryBatches.reduce(batteryReducer, 0)



