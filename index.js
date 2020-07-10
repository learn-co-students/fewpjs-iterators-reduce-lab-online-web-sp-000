const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, element) => element + total, 0)
// Breakdown:
// (1) The first argument represents our running total
// (2) The second argument represents the current element we are iterating over
// (3) Everytime we pass over an element, we will add it to the total's current value, then move on to the next element until we reach the end of the array.
// (4) The '0' at the end of the reduce represents the starting value we want to begin with. In this case, zero.