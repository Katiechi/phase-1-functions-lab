// Code your solution in this file!
let streetNumber = 42

function  distanceFromHqInBlocks(newStreetNumber){
    if (streetNumber>42){
        return newStreetNumber -streetNumber
    }
    else{
        return Math.abs(streetNumber-newStreetNumber)
    }
}
console.log(distanceFromHqInBlocks(43))

function  distanceFromHqInBlocks(newStreetNumber){
    if (streetNumber>42){
        return newStreetNumber -streetNumber
    }
    else{
        return Math.abs(streetNumber-newStreetNumber)
    }
}
console.log(distanceFromHqInBlocks(50))


function distanceFromHqInFeet(newStreetNumber){
    if (streetNumber>42){
        return (newStreetNumber -streetNumber)*264
    }
    else{
        return Math.abs(streetNumber-newStreetNumber)*264
    }
}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(position, endPosition){
    if(position < endPosition){
        return (endPosition-position)*264
    }
    else{
        return Math.abs(endPosition-position)*264
    }
}
console.log(distanceTravelledInFeet(43,48))


function calculatesFarePrice(start, destination){
    if(Math.abs(destination-start)*264 < 400){
        return 0 
    }
    else if (Math.abs(destination-start)*264 >=400 && Math.abs(destination-start)*264 <=2000 ){
        return (Math.abs(destination-start)*264 - 400)*(2/100)
    }
    else if(Math.abs(destination-start)*264 >2000 && Math.abs(destination-start)*264 <=2500 ){
        return 25
    }
    else{
        return `cannot travel that far`
    }
}
console.log(calculatesFarePrice(34,32))
