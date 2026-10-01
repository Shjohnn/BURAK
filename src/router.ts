import express  from "express";
const router = express.Router();
import memeberController from "./controllers/member.controller";     

router
    .post('/login', memeberController.login);

router
    .post('/signup', memeberController.signup);



export default router;