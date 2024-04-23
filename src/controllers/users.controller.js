class UserController {
  #dao
  constructor(UserDao) {
    this.#dao = UserDao
  }

  getUsers = async (req, res) => {
    try {
      res.json({
        message: 'Hola mundo'
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserController