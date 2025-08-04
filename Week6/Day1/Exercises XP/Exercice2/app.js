import express from "express";
import router from "../Exercice2/routes/todos.routes.js";

const app = express();
app.use(express.json());
const PORT = 3001;
const indexRoute = router;
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`khedama f l porte ${PORT}`);
});
