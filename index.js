const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function reducer(array) {
  return array.reduce( (total, element) => total + element, 0)
}

const totalBatteries = reducer(batteryBatches)
