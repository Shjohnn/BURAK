import {T} from "../libs/types/common";
import {Request,Response} from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemeberType } from "../libs/enums/member.enum";

const restuarantController: T = {}
const memberService = new MemberService();

restuarantController.goHome=(req:Request,res:Response) =>{
    try {
        console.log("goHome");
        res.render('home')
        // send/ json/redirect/ end/ render
    } catch(err) {
        console.log("Error goHome", err)
    }
};

restuarantController.getSignup=(req:Request,res:Response) =>{
    try {
        console.log("getSignup");
        res.render("signup")
    } catch(err) {
        console.log("Error goSignup", err)
    }
};

restuarantController.getLogin=(req:Request,res:Response) =>{
    try {
        console.log("getLogin");
        res.render("login")
    } catch(err) {
        console.log("Error goLogin", err)
    }
};

restuarantController.proccesSignup= async(req:AdminRequest,res:Response) =>{
    try {
        console.log("proccesSignup");

        const newMember:MemberInput = req.body;
                //TODO SESSIONS AUTHENTICATION
        newMember.memberType=MemeberType.RESTUARANT;
        const result = await memberService.proccesSignup(newMember);



        req.session.member  = result;
        req.session.save(function() {
            res.send(result);
        });
        } catch(err) {
        console.log(err,"Error proccesSignup");
        res.send(err)
    }
};


restuarantController.proccesLogin=async(req:AdminRequest,res:Response) =>{
    try {
        console.log("proccesLogin");
        console.log("body:", req.body);
        const input:LoginInput = req.body;
        const result = await memberService.proccesLogin(input);
        
        req.session.member  = result;
        req.session.save(function() {
            res.send(result);
        });
    } catch(err) {
        console.log("Error proccesLogin", err);
        res.send(err)
    }
};






export default restuarantController;
