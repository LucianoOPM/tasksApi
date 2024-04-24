//importación de la clase MainRouter
import MainRouter from "./MainRouter.js";

//Creación de la clase HomeRouter, extendiendo de MainRouter
class HomeRouter extends MainRouter {
  //El constructor de homeRouter, le otorga el router al constructor de MainRouter
  constructor(router) {
    super(router)
  }

  //La función init la hereda de MainRouter, y se inicializa cuando MainRouter se inicializa.
  init() {
    //La ruta raíz, devuelve un mensaje de que funciona. Cabe destacar que se está utilizando un verbo REST API GET (https://copilot.microsoft.com/sl/jbiD7h0Uvoy)
    this.router.get('/', async (req, res) => {
      try {
        //Respuesta del servidor cuando se accede a la ruta raíz
        res.json({
          message: 'Funciona!'
        })
      } catch (error) {
        console.log(error)
      }
    })
  }
}

//Exportación del módulo
export default HomeRouter;