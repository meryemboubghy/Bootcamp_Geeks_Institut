// import datefns from "date-fns";

export async function getDate() {
  // renvoie le temps restant jusqu'au 1er janvier
  const tmpRest = new Date();
  const currentYear = tmpRest.getFullYear();
  const nextJan = new Date(currentYear + 1, 0, 1, 0, 0, 0);
  const diff = nextJan - tmpRest;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
}
