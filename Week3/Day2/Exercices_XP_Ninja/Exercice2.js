// Fonction 1 : Calcule la moyenne
function calculateAverage(gradesList) {
  if (gradesList.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  let average = sum / gradesList.length;
  return average;
}

// Fonction 2 : Utilise calculateAverage et affiche le message
function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log("La moyenne est :", average);

  if (average > 65) {
    console.log("Félicitations ! Vous avez réussi !");
  } else {
    console.log("Vous avez échoué. Vous devez recommencer le cours.");
  }
}
findAvg([80, 90, 75]);
findAvg([40, 55, 60]);
findAvg([]);
