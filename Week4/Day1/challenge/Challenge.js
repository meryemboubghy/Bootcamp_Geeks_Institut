let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};
// 1 :
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};
// 2 :
const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log("le client est :", client);
  console.log("le user est :", user);
  let shopping = groceries;
  shopping.totalPrice = " 35$";
  console.log("le prix Total :", groceries.totalPrice);
  shopping.other.paid = false;
  console.log("paid :", groceries.other.paid);
};
displayGroceries();
cloneGroceries();
