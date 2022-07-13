const fs = require("fs");
let consumptionPerPerson;
let unitCost;
let waterConsumedByGuest = 0;
let corporationWater;
let borewellWater;
let guest = 0;
function allotWater(apartmentType, corporationWater, borewellWater) {
let data;

let allotWater = (apartmentType, corporationWater, borewellWater) => {
  corporationWater = +corporationWater;
  borewellWater = +borewellWater;
  if (apartmentType == 2) {
    consumptionPerPerson =900;
  } else if (apartmentType ==3){
    consumptionPerPerson =1500;
  }


  unitCost = consumptionPerPerson / (corporationWater + borewellWater);

};

function addGuest(addGuest) {
let addGuest = (addGuest) => {
  guest += addGuest;
  waterConsumedByGuest = guest * 10 * 30;
}
};

function getBill() {
let getBill = () => {
  let guestBill = 0;

  if (waterConsumedByGuest > 0) {
    guestBill = waterConsumedByGuest*2;
  }
  if(waterConsumedByGuest>500){
    guestBill =500*2 +(waterConsumedByGuest-500)*3;
  }
  if(waterConsumedByGuest>1500){
    guestBill  =500 *2 + 1000 *3 +(waterConsumedByGuest-1500) *5;
  }
  if(waterConsumedByGuest>3000){
    guestBill= 500 *2 +1000*3 +1500*5+(waterConsumedByGuest-3000)*8;
  }


  let totalBill = Math.ceil(
    unitCost * corporationWater * 1 + unitCost * borewellWater * 1.5 + guestBill
  );
var  totalWater=unitCost*corporationWater+unitCost *borewellWater +waterConsumedByGuest;
totalWater =Math.round(totalWater);
return `${totalWater } ${totalBill}`;
  };

function runProgram(input) {
  input = input.trim().split("\n");
  
  for (let i = 0; i < input.length; i++) {
    let inputType = input[i].trim().split(" ");
    // console.log(inputType);
    if(inputType[0]==="ALLOT_WATER"){
        var apartmentType =inputType[1];
        var waterRatio =inputType[2].split(":");
        corporationWater= waterRatio[0];
        borewellWater =waterRatio[1];
        allotWater(apartmentType,corporationWater,borewellWater);
    } else if( inputType[0] === "ADD_GUESTS"){
        var guest =+inputType[1];
        addGuest(guest);
    } else if((inputType[0]==="BILL"))  {
        console.log(getBill());
    } 
    
    

data = fs.readFileSync(process.argv[2]).toString();
runProgram(data);