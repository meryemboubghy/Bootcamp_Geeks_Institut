const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
//1 :
let gameInf = [];
gameInfo.forEach(function (userName) {
  gameInf.push(userName.username + "!");
});
console.log(gameInf);
// 2 :
let winners = [];
gameInfo.forEach(function (gaming) {
  if (gaming.score > 5) {
    winners.push(gaming.username);
  }
});
console.log(winners);
// 3 :
let totalScore = 0;
gameInfo.forEach((score) => {
  totalScore += score.score;
});
console.log("le score total est de ", totalScore);
