const mapOftheSavannah = "L  Z L Z";
let closestZebraDistance = 100;
let animalNotSeen = -1;
let distance = 0;
let currentIndexValue = "";

currentIndexValue = mapOftheSavannah[0];

for(let currentIndex = 1;currentIndex < mapOftheSavannah.length ; currentIndex++){
  if(mapOftheSavannah[currentIndex] === " "){
    distance = distance + 1;
  } else if (mapOftheSavannah[currentIndex] === currentIndexValue){
    distance = 0;
  } else {
    closestZebraDistance = closestZebraDistance > distance ? distance : closestZebraDistance ;
    currentIndexValue = mapOftheSavannah[currentIndex];
    distance = 0;
    animalNotSeen = 1;
  }
}

closestZebraDistance = (animalNotSeen === -1) ?  animalNotSeen : closestZebraDistance;
console.log("Input:",mapOftheSavannah,"Output:",closestZebraDistance);
