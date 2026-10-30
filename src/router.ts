import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";     


//Member
router.post('/member/login', memeberController.login);
router.post('/member/signup', memeberController.signup);
router.get("/member/detail", memeberController.verifyAuth);
router.post("/member/logout", memeberController.verifyAuth, memeberController.logout)

 //Product



 //Order

export default router;