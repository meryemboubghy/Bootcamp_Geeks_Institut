const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((colors, index) => {
  const place = index + 1;
  const suffix =
    place === 1
      ? ordinal[1]
      : place === 2
      ? ordinal[2]
      : place === 3
      ? ordinal[3]
      : ordinal[0];
  console.log(`le ${place}${suffix} choix est le ${colors}`);
});
