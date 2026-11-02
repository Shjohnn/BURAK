import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";   
import uploader from "./libs/utils/uploader";  


//Member
router.post('/member/login', memeberController.login);
router.post('/member/signup', memeberController.signup);
router.post("/member/logout", memeberController.verifyAuth, memeberController.logout);
router.get("/member/detail", memeberController.verifyAuth, memeberController.getMemberDetail);
router.post("/member/update", 
    memeberController.verifyAuth,
    uploader("members").single('memberImage'),
    memeberController.updateMember);
router.get("/member/top-users", memeberController.verifyAuth, memeberController.getTopUsers);

 //Product



 //Order

export default router;