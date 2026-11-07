import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";   
import uploader from "./libs/utils/uploader";  
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";


//Member
router.get("/member/restaurant", memeberController.getRestaurant);
router.post('/member/login', memeberController.login);
router.post('/member/signup', memeberController.signup);
router.post("/member/logout", memeberController.verifyAuth, memeberController.logout);
router.get("/member/detail", memeberController.verifyAuth, memeberController.getMemberDetail);
router.post("/member/update", 
    memeberController.verifyAuth,
    uploader("members").single('memberImage'),
    memeberController.updateMember);
router.get("/member/top-users",  memeberController.getTopUsers);


 //Product
router.get("/product/all", productController.getProducts);
router.get("/product/:id", memeberController.retrieveAuth, productController.getProduct);


 //Order
 router.post("/order/create",memeberController.verifyAuth,orderController.createOrder);
 router.get("/order/all", memeberController.verifyAuth, orderController.getMyOrders);




export default router;