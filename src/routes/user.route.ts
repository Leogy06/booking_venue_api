import { Router } from "express";
import { getUsersController } from "../controllers/user.controller";

const userRoutes = Router()

userRoutes.get("/", getUsersController)

export default userRoutes