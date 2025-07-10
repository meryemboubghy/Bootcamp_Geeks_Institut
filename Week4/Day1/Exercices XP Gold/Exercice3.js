const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
//c'est une fonction qui retourne une autre fonction =>(a = 3O + b)
// et en suite la fonction b il calculer 30 + 1 = 31
