const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);
// fonction curriedSum qui returne autre fonction b => 5+b
// en suit la fonction b sera fait la sum de add5=5+12=17
