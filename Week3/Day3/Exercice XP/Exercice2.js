const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banane", "orange", "pomme"];
function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item]--;
      console.log(
        `${item} acheté pour ${prices[item]}€ (stock restant : ${stock[item]})`
      );
    } else {
      console.log(`${item} est en rupture de stock `);
    }
  }
  console.log("Total is :", total);
  return total;
}
myBill();
