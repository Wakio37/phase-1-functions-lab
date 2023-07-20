// Code your solution in this file!\
function distanceFromHqInBlocks(pickUpLocation) {
    const hq = 42
    const distance = pickUpLocation - hq
    return Math.abs(distance)
}

function distanceFromHqInFeet(pickUpLocation){
    const distance = distanceFromHqInBlocks(pickUpLocation)
    return distance*264

}

// const distanceInFeet = distanceFromHqInFeet(50)
// console.log(distanceInFeet)

function distanceTravelledInFeet(pickUpLocation, destination) {
    const distance = pickUpLocation - destination
    return Math.abs(distance) * 264

}

function  calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    let fare;
    if (distance <= 400) {
        fare = 0
    }else if((distance > 400) && (distance <= 2000)) {

        fare = (distance-400)*2/100
    }else if((distance > 2000) && (distance <= 2500)){
        fare = 25
    }else{
        fare = 'cannot travel that far'

    }

        return fare;
}



