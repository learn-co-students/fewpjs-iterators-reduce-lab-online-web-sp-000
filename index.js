const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(arr) {
  return arr.reduce((total, elem) => total + elem, 0)
}

const totalBatteries = reducer(batteryBatches)