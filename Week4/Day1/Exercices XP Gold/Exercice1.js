let landscape = function () {
  let result = "";

  let flat = function (x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = function (x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4); // ajoute ___
  mountain(4); //ajoute /''''\\
  flat(4); //ajoute ____

  return result;
};

landscape();
// le resultat =====> ____/''''\____

// 2 :
const landscape = () => {
  let result = "";
  const flat = (x) => {
    for (let count = 0; count < x; count++) result += "_";
  };
  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) result += "'";
    result += "\\";
  };
  flat(4);
  mountain(4);
  flat(4);

  return result;
};
landscape();
