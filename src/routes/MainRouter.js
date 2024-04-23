class MainRouter {
  constructor(router) {
    this.router = router()
    this.init()
  }

  getRouter = () => {
    return this.router
  }

  init() { }

  applyCallbacks = (callbacks) => {
    return callbacks.map(callback => async (...params) => {
      try {
        await callback.apply(this, params)
      } catch (error) {
        params[1].status(500).send({
          status: 'error',
          error
        })
      }
    })
  }

  // handlePolicies = policies => async (req, res, next) => {
  //   try {
  //     next()
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // generateCustomResponse = async (req, res, next) => {
  //   try {
  //     next()
  //   } catch (error) {
  //     throw error
  //   }
  // }
  get = (path, ...callbacks) => {
    this.router.get(path, this.applyCallbacks(callbacks))
  }
}

export default MainRouter