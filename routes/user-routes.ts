import { Router } from "express";
import UserController from "../controllers/user-controller";
const userRoutes = Router();
const controller = new UserController();

userRoutes.get('/', controller.getUsers);

export default userRoutes;