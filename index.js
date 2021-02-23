// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
  const distanceBlocks = Math.abs((someValue - 43) + 1);
  return distanceBlocks
}

function distanceFromHqInFeet(someValue){
  const distanceFeet = distanceFromHqInBlocks(someValue) * 264;
  return distanceFeet
}

function distanceTravelledInFeet(startingBlock, endBlock){
  const totalFeet = (Math.abs(startingBlock - endBlock)) * 264
  return totalFeet
}

function calculatesFarePrice(startingBlock, endBlock){
    const totalFeet = (Math.abs(startingBlock - endBlock)) * 264
    if (totalFeet < 400) {
      const totalCost = 0
      return totalCost
    } else if (totalFeet <= 2000 ) {
      const totalCost = (totalFeet -400) * .02
      return totalCost
    } else if (totalFeet < 2500 ) {
      const totalCost = 25
      return totalCost
    } else {
      return "cannot travel that far"
    }
}
