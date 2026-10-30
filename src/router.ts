import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";     


//Member
router.post('/member/login', memeberController.login);
router.post('/member/signup', memeberController.signup);
router.post("/member/logout", memeberController.verifyAuth, memeberController.logout);
router.get("/member/detail", memeberController.verifyAuth, memeberController.getMemberDetail);

 //Product



 //Order

export default router;