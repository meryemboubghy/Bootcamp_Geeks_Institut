const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

//compose(add1 ,add5) qui returne une autre fonction g(a)=>10+5
// apres appliquer 15+1=16
