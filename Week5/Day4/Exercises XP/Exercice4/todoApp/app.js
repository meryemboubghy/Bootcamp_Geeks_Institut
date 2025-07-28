import { TodoList } from "./todo.js";

const malist = new TodoList();
malist.addTasks("Complet l'exercice XP");
malist.addTasks("Faire les courses");
malist.addTasks("cours is completed");
malist.markTasksAsCompleted(0);
malist.markTasksAsCompleted(2);
malist.listAllTasks();
