const mapOfSavannah = "    Z L ";
let closestZebraDistance = 101;
let distance = 0;
let firstLetterFound = false;

let previousAnimalSeen = " ";

for (let currentIndex = 0; currentIndex < mapOfSavannah.length; currentIndex++ ){

  if (mapOfSavannah[currentIndex] !== " " || firstLetterFound){
    firstLetterFound = true;

    if (mapOfSavannah[currentIndex] !== " " && mapOfSavannah[currentIndex] !== previousAnimalSeen){
      closestZebraDistance = (closestZebraDistance > distance && previousAnimalSeen !== " ") ? distance : closestZebraDistance;
      previousAnimalSeen = mapOfSavannah[currentIndex];
      distance = 0;
    } else if (mapOfSavannah[currentIndex] === previousAnimalSeen){
      distance = 0;
    } else {
      distance = distance + 1;
    }

  }

}

closestZebraDistance = (closestZebraDistance === 101) ?  -1 : closestZebraDistance;
console.log("Input:",mapOfSavannah,"Output:",closestZebraDistance);
