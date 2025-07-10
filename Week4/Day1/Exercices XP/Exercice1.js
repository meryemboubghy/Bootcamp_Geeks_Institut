// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}
// reponse => la valeur de 'a' sera = 3 car 5>1  donc a reassignee a 3

funcOne(); // Affichier : inside the funcOne function 3

// #1.2 What will happen if the variable is declared
// reponce  =>  Si on remplace `let a = 5` par `const a = 5`, il y aura une ERREUR
// car `a = 3` essaie de réassigner une variable constante.

//#2
let a = 0;
function funcTwo() {
  a = 5;
}
function funcThree() {
  alert(`inside the funcThree function ${a}`);
}
// #2.1 - run in the console:
funcThree(); // Affiche : "inside the funcThree function 0 :
funcTwo(); //change la valeur de a à 5
funcThree(); // Affiche : "inside the funcThree function 5"

// #2.2 What will happen if the variable is declared with const instead of let ?
// reponce : =>const a = 0 Cela provoquerait une ERREUR dans funcTwo car on tente de faire `a = 5`
// alors que `a` est une constante.
//#3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive(); // Affiche : "inside the funcFive function hello"
// car `a` a été ajoutée à l'objet global `window`
//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}
funcSix(); // Affiche : 'inside the funcSix function test '
//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
