class UserDao {
  #connection
  constructor(dbConnection) {
    this.#connection = dbConnection
  }
}

export default UserDao