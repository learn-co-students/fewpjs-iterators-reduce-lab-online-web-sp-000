const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const s = 0;

const totalBatteries = batteryBatches.reduce((s, el) => {
  return el + s;
})

//console.log(totalBatteries);