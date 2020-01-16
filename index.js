const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = (batteryBatches) => {
  return batteryBatches.reduce((totalBatteries, initialValue) => {
    return totalBatteries + initialValue;
  })
}

const totalBatteries = batteries(batteryBatches);
