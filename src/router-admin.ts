import express  from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/resturant.controller";
import productController from "./controllers/product.controller";


//resturant
routerAdmin.get('/',restuarantController.goHome ) ;


routerAdmin
    .get('/login', restuarantController.getLogin)
    .post('/login', restuarantController.proccesLogin);

routerAdmin
    .get('/signup', restuarantController.getSignup)
    .post('/signup', restuarantController.proccesSignup);

routerAdmin.get("/logout", restuarantController.logout);
routerAdmin.get("/check-me", restuarantController.checkAuthSession);
    
//product
 routerAdmin.get("/product/all", productController.getAllProducts);
 routerAdmin.post("/product/create", productController.createNewProduct);
 routerAdmin.put("/product/:id", productController.updateChosenProduct);



//user


export default routerAdmin;