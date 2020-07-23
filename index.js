const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

