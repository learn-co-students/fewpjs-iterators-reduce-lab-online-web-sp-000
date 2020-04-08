const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = reduceFunction(batteryBatches);

function reduceFunction(array){
    return array.reduce((totalAmount, element) => totalAmount + element, 0)
} 