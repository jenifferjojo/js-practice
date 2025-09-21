const mapOfSavannah = "L  L L Z";
let closestZebraDistance = 101;
let distance = 0;
let currentIndexValue = "";

currentIndexValue = mapOfSavannah[0];

for (let currentIndex = 1;currentIndex < mapOfSavannah.length ; currentIndex++ ){
  if (mapOfSavannah[currentIndex] === " "){
    distance = distance + 1;
  } else if (mapOfSavannah[currentIndex] === currentIndexValue){
    distance = 0;
  } else {
    closestZebraDistance = closestZebraDistance > distance ? distance : closestZebraDistance;
    currentIndexValue = mapOfSavannah[currentIndex];
    distance = 0;
  }
}

closestZebraDistance = (closestZebraDistance === 101) ?  -1 : closestZebraDistance;
console.log("Input:",mapOfSavannah,"Output:",closestZebraDistance);
