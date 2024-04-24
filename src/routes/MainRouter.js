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
  post = (path, ...callbacks) => {
    this.router.post(path, this.applyCallbacks(callbacks))
  }
  put = (path, ...callbacks) => {
    this.router.put(path, this.applyCallbacks(callbacks))
  }
  delete = (path, ...callbacks) => {
    this.router.delete(path, this.applyCallbacks(callbacks))
  }
}

export default MainRouter