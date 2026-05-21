import { Request, Response } from "express";
import { getUsersService } from "../services/user.service";

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();

  res.status(200).json(users);
};
