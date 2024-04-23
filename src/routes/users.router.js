import MainRouter from "./MainRouter.js";
import { userController } from "../controllers/index.controller.js";

class UserRouter extends MainRouter {
  constructor(router) {
    super(router)
  }

  init() {
    this.get('/', userController.getUsers)
  }
}

export default UserRouter;