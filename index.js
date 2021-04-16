const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce( (total, batch) => total += batch, 0)