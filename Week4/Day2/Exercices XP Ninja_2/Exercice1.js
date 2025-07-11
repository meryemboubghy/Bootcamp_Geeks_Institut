const menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];
//1 :

let res = {};
for (let i = 0; i < menu.length; i++) {
  const type = menu[i].type;
  res[type] = type === "dessert" ? "Exest" : "N'exist pas";
}
console.log(res);
// 2  :
const allStarters = menu.every((item) => item.type === "starter");
console.log(
  allStarters ? "Tous sont des starters" : "Pas tous sont des starters"
);
// 3 :
const hasMainCourse = menu.some((item) => item.type === "main course");

if (!hasMainCourse) {
  menu.push({
    type: "main course",
    name: "Grilled Chicken with Rice",
  });
}

console.log(menu);

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

const updatedMenu = menu.map((item) => {
  const isVegetarian = vegetarian.some((veg) =>
    item.name.toLowerCase().includes(veg.toLowerCase())
  );

  return {
    ...item,
    vegetarian: isVegetarian,
  };
});

console.log(updatedMenu);
