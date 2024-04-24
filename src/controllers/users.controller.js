class UserController {
  #dao
  constructor(UserDao) {
    this.#dao = UserDao
  }

  getUsers = async (req, res) => {
    try {
      res.json({
        message: 'Esta ruta entregaría a los usuarios'
      })
    } catch (error) {
      console.log(error)
    }
  }

  getUserById = (req, res) => {
    try {
      res.json({
        message: 'Esta ruta entregaría a un usuario'
      })
    } catch (error) {

    }
  }

  createUser = (req, res) => {
    try {
      res.json({
        message: 'Esta ruta crearía un usuario'
      })
    } catch (error) {

    }
  }

  updateUser = (req, res) => {
    try {
      res.json({
        message: 'Esta ruta actualizaría un usuario'
      })
    } catch (error) {

    }
  }

  deleteUser = (req, res) => {
    try {
      res.json({
        message: 'Esta ruta eliminaría un usuario'
      })
    } catch (error) {

    }
  }
}

export default UserController