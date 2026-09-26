import express  from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/resturant.controller";

routerAdmin.get('/',restuarantController.goHome ) ;


routerAdmin.get('/login', restuarantController.getLogin);

routerAdmin.get('/signup', restuarantController.getSignup);

export default routerAdmin;