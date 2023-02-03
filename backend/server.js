require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const express = require("express");
const connectDB = require("./config/db");
//express app setup
const app = express();

//database connection
connectDB();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(
  cors({
    origin: "https://todo-list-app-fe.onrender.com",
  })
);

//Routes
const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/users");
app.use("/api/todo", todosRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
