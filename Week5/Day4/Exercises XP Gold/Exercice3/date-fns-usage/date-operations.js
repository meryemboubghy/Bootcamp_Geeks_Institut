import { format, addDays } from "date-fns";
// Obtain the current date
export function getCurrentDate() {
  const currentDate = new Date();
  const formattedCurrentDate = format(currentDate, "dd/MM/yyyy  HH:mm:ss");
  console.log("Current Date:", formattedCurrentDate);

  // Add 5 days to the current date
  const futereDate = addDays(currentDate, 5);
  console.log(
    "Future Date (5 days later):",
    format(futereDate, "dd/MM/yyyy  HH:mm:ss")
  );
  // Format the future date to a readable string
  const formattedFutureDate = format(futereDate, "dd/MM/yyyy  HH:mm:ss");
  console.log("Formatted Future Date:", formattedFutureDate);
}
