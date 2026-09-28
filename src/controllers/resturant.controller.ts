import {T} from "../libs/types/common";
import {Request,Response} from "express";
import MemberService from '../models/Member.service'

const restuarantController: T = {}
restuarantController.goHome=(req:Request,res:Response) =>{
    try {
        console.log("goHome");
        res.send("Home page")
    } catch(err) {
        console.log("Error goHome", err)
    }
};

restuarantController.getLogin=(req:Request,res:Response) =>{
    try {
        console.log("getLogin");
        res.send("Login page")
    } catch(err) {
        console.log("Error goLogin", err)
    }
};

restuarantController.getSignup=(req:Request,res:Response) =>{
    try {
        console.log("getSignup");
        res.send("Signup page")
    } catch(err) {
        console.log("Error goSignup", err)
    }
};

export default restuarantController;