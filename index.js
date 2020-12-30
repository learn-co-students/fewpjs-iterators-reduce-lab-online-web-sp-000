const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(array) {
    return array.reduce( (total, element) => element + total)
}

let totalBatteries = batteries(batteryBatches)