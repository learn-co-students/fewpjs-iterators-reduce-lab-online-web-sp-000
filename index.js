const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 4
 batteryBatches.reduce(function(total,num){ 
   return totalBatteries += num
    
 })

console.log(totalBatteries)
