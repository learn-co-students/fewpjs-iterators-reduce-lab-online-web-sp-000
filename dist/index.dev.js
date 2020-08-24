"use strict";

var batteryBatches = [4, 5, 3, 4, 4, 6, 5];
var totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);