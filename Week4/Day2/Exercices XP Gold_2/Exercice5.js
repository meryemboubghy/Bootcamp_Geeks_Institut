const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);
console.log(startLine);
console.log(turtle);
console.log(rabbit);
turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);
