import MainRouter from "./MainRouter.js";
import { userController } from "../controllers/index.controller.js";

class UserRouter extends MainRouter {
  constructor(router) {
    super(router)
  }

  init() {
    this.get('/', userController.getUsers)
    this.get('/:id', userController.getUserById)
    this.post('/', userController.createUser)
    this.put('/:id', userController.updateUser)
    this.delete('/:id', userController.deleteUser)
  }
}

export default UserRouter;