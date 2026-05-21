import express from "express";
import userRoutes from "./routes/user.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.use("/users", userRoutes);

export default app;
