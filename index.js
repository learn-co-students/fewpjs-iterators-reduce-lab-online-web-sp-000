const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

  let batteries = (acc, num) => acc + num
  let totalBatteries = batteryBatches.reduce(batteries)