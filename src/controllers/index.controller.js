import UserController from "./users.controller.js";
import { userDao } from "../DAO/index.dao.js";

const userController = new UserController(userDao)

export {
  userController
}