import {T} from "../libs/types/common";
import {Request,Response} from "express";


const memeberController: T = {}
memeberController.goHome=(req:Request,res:Response) =>{
    try {
        res.send("Home page")
    } catch(err) {
        console.log("Error goHome", err)
    }
};

memeberController.getLogin=(req:Request,res:Response) =>{
    try {
        res.send("Login page")
    } catch(err) {
        console.log("Error goLogin", err)
    }
};

memeberController.getSignup=(req:Request,res:Response) =>{
    try {
        res.send("Signup page")
    } catch(err) {
        console.log("Error goSignup", err)
    }
};

export default memeberController;