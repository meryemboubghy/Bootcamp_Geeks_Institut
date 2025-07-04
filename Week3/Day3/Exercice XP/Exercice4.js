const prompt = require("prompt-sync")();

function hotelCost() {
  const costPerNight = 140;
  let nights;

  while (true) {
    nights = parseInt(
      prompt("How many nights do you want to stay at the hotel? ")
    );

    if (!isNaN(nights) && nights > 0) {
      return nights * costPerNight;
    } else {
      console.log("Please enter a valid number of nights.");
    }
  }
}

let total = hotelCost();
console.log("The total cost of the hotel is: $" + total);

function planeRideCost() {
  let destination;

  while (true) {
    destination = prompt("What is your destination? ").trim();

    if (destination && isNaN(destination)) {
      destination = destination.toLowerCase();

      if (destination === "london") {
        return 183;
      } else if (destination === "paris") {
        return 220;
      } else {
        return 300;
      }
    } else {
      console.log("Please enter a valid destination (a text, not a number).");
    }
  }
}

// let planeCost = planeRideCost();
// console.log("The cost of the plane ride is: $" + planeCost);

function rentalCarCost() {
  const dailyRate = 40;
  let days;

  while (true) {
    days = parseInt(prompt("How many days would you like to rent the car? "));

    if (!isNaN(days) && days > 0) {
      let total = days * dailyRate;

      if (days > 10) {
        total *= 0.95;
      }

      return total;
    } else {
      console.log("Please enter a valid number of days.");
    }
  }
}

// let carCost = rentalCarCost();
console.log("The total cost of the car rental is: $" + carCost.toFixed(2));
function totalVacationCost() {
  const carCost = rentalCarCost();
  const hotelCostTotal = hotelCost();
  const planeCost = planeRideCost();

  const total = carCost + hotelCostTotal + planeCost;

  console.log(
    `The car cost: $${carCost.toFixed(
      2
    )}, the hotel cost: $${hotelCostTotal.toFixed(
      2
    )}, the plane tickets cost: $${planeCost.toFixed(2)}.`
  );
  console.log(`The total vacation cost is: $${total.toFixed(2)}`);
}
totalVacationCost();
