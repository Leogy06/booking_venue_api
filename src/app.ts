import express from "express";
import userRoutes from "./routes/user.route";
import bookingRoutes from "./routes/booking.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);

export default app;
