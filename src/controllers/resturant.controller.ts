import {T} from "../libs/types/common";
import {Request,Response} from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemeberType } from "../libs/enums/member.enum";

const restuarantController: T = {}
restuarantController.goHome=(req:Request,res:Response) =>{
    try {
        console.log("goHome");
        res.send("Home page")
        // send/ json/redirect/ end/ render
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

restuarantController.proccesLogin=async(req:Request,res:Response) =>{
    try {
        console.log("proccesLogin");
        console.log("body:", req.body);
        const input:LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.proccesLogin(input);
        
        res.send(result)
    } catch(err) {
        console.log("Error proccesLogin", err);
        res.send(err)
    }
};

export default restuarantController;

restuarantController.getSignup=(req:Request,res:Response) =>{
    try {
        console.log("getSignup");
        res.send("Signup page")
    } catch(err) {
        console.log("Error goSignup", err)
    }
};


restuarantController.proccesSignup= async(req:Request,res:Response) =>{
    try {
        console.log("proccesSignup");
        console.log("body:", req.body);

        const newMember:MemberInput = req.body;
        newMember.memberType=MemeberType.RESTUARANT;
        const memberService = new MemberService();
        await memberService.proccesSignup(newMember);
        res.send("Done")
    } catch(err) {
        console.log(err);
        res.send(err)
    }
};