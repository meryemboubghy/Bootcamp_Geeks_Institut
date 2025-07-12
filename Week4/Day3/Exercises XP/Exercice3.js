const users = { user1: 18273, user2: 92833, user3: 90315 };

let array = Object.entries(users);
console.log(array);

// Object.entries(users).forEach(([key, value]) => {
//   console.log(`${key} : ${value}`);
// });

let multi = Object.entries(users).map(([key, value]) => {
  return `${key} , ${value * 2}`;
});
console.log(multi);
