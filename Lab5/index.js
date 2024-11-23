import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);


// app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
//   const { id, completed } = req.params;
//   const todo = todos.find((t) => t.id === parseInt(id));

//   if (todo) {
//     todo.completed = completed === "true";
//     res.json(todos);
//   } else {
//     res.status(404).json({ error: "Todo not found" });
//   }
// });

// Route to update the description property of a todo
// app.get("/lab5/todos/:id/description/:description", (req, res) => {
//   const { id, description } = req.params;
//   const todo = todos.find((t) => t.id === parseInt(id));

//   if (todo) {
//     todo.description = description;
//     res.json(todos);
//   } else {
//     res.status(404).json({ error: "Todo not found" });
//   }
// });
};