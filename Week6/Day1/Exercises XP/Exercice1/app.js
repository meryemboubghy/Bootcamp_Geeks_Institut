import routes from "../Exercises XP/routes/routes.js";
import express from "express";

const app = express();
const PORT = 3000;
const indexRoute = routes;
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`khedama f l porte ${PORT}`);
});
