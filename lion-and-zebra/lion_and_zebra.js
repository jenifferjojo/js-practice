const mapOftheSavannah = "L  ZL Z";
let closestZebraDistance = 100;
let animalNotSeen = -1;
let distance = 0;
let currentAnimal = "";

currentAnimal = mapOftheSavannah[0];

for(let iteration = 1;iteration < mapOftheSavannah.length ; iteration++){
  if(mapOftheSavannah[iteration] === " "){
    distance = distance + 1;
  } else if (mapOftheSavannah[iteration] === currentAnimal){
    distance = 0;
  } else {
    closestZebraDistance = closestZebraDistance > distance ? distance : closestZebraDistance ;
    currentAnimal = mapOftheSavannah[iteration];
    distance = 0;
    animalNotSeen = 1;
  }
}

closestZebraDistance = (animalNotSeen === -1) ?  animalNotSeen : closestZebraDistance;
console.log(closestZebraDistance);
