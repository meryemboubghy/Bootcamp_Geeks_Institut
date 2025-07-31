export function getMinutes(dateNaissance) {
  const birthDate = new Date(dateNaissance);
  const now = new Date();
  const differenceMinutes = now - birthDate;
  const minutes = Math.floor(differenceMinutes / 60000);
  return minutes;
}
// const res = getMinutes("10/09/1999");
// console.log(res);
