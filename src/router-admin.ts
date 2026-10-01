import express  from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/resturant.controller";


//resturant
routerAdmin.get('/',restuarantController.goHome ) ;


routerAdmin
    .get('/login', restuarantController.getLogin)
    .post('/login', restuarantController.proccesLogin);

routerAdmin
    .get('/signup', restuarantController.getSignup)
    .post('/signup', restuarantController.proccesSignup);



    
//product

//user


export default routerAdmin;