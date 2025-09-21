const mapOftheSavannah = "L  L L Z";
let closestZebraDistance = 101;
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
  }
}

closestZebraDistance = (closestZebraDistance === 101) ?  -1 : closestZebraDistance;
console.log("Input:",mapOftheSavannah,"Output:",closestZebraDistance);
