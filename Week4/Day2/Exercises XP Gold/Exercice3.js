const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  //alert(num);
  return num * 2;
});
// i represente l'index de l'element dans le tableau
//Valeurs de i => 0,1,2,3,4,5
