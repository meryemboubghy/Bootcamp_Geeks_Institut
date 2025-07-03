const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// 2 :
// console.log(building.numberOfFloors);
//3 :
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
// 4 :
const secondTenant = building.nameOfTenants[1].toLowerCase();
const numberOfRooms = building.numberOfRoomsAndRent[secondTenant][0];

console.log(
  `Le deuxième locataire est ${secondTenant} et il a ${numberOfRooms} pièces.`
);
// 5 :
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;

  console.log("Le loyer de Dan a été augmenté à 1200.");
} else {
  console.log("Le loyer de Dan reste inchangé.");
}

console.log("Loyer actuel de Dan :", building.numberOfRoomsAndRent.dan[1]);
