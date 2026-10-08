import express  from "express";
const routerAdmin = express.Router();
import restuarantController from "./controllers/resturant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";


//resturant
routerAdmin.get('/',restuarantController.goHome ) ;


routerAdmin
    .get('/login', restuarantController.getLogin)
    .post('/login', restuarantController.proccesLogin);

routerAdmin
    .get('/signup', restuarantController.getSignup)
    .post('/signup',makeUploader("members").single('memberImage'), restuarantController.proccesSignup);

routerAdmin.get("/logout", restuarantController.logout);
routerAdmin.get("/check-me", restuarantController.checkAuthSession);
    
//product
 routerAdmin.get(
    "/product/all", 
    restuarantController.verifyRestuarant,
    productController.getAllProducts
);
 routerAdmin.post(
    "/product/create", 
    restuarantController.verifyRestuarant,
    // uploadProductImage.single('productImage'),
    makeUploader("products").single('productImage'),
    productController.createNewProduct);

 routerAdmin.put("/product/:id", 
    restuarantController.verifyRestuarant,
    productController.updateChosenProduct);



//user


export default routerAdmin;