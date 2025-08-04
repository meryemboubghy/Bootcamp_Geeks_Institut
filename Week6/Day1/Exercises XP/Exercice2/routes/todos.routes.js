import express from "express";

const router = express.Router();
const todo = [];

let id = 0;

router.get("/todos", (req, res) => {
  res.json(todo);
});

router.post("/create", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = {
    id: id++,
    task,
    //completed: false,
  };

  todo.push(newTodo);
  res.status(201).json(newTodo);
});
router.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const { task } = req.body;
  const todoItem = todo.find((item) => item.id === parseInt(id));
  if (!todoItem) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todoItem.task = task;
  res.json({ message: "task updating" }, todoItem);
});

// Delete :
router.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todo.findIndex((item) => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

export default router;
