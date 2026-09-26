import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";     

router.get('/',memeberController.goHome ) ;


router.get('/login', memeberController.getLogin);

router.get('/signup', memeberController.getSignup);

export default router;