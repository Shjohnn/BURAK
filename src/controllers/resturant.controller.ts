import {T} from "../libs/types/common";
import {NextFunction, Request,Response} from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemeberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const restuarantController: T = {}
const memberService = new MemberService();

restuarantController.goHome=(req:Request,res:Response) =>{
    try {
        console.log("goHome");
        res.render('home')
        // send/ json/redirect/ end/ render
    } catch(err) {
        console.log("Error goHome", err)
        res.redirect("/admin")
    }
};

restuarantController.getSignup=(req:Request,res:Response) =>{
    try {
        console.log("getSignup");
        res.render("signup")
    } catch(err) {
        console.log("Error goSignup", err)
        res.redirect("/admin")
    }
};

restuarantController.getLogin=(req:Request,res:Response) =>{
    try {
        console.log("getLogin");
        res.render("login")
    } catch(err) {
        console.log("Error goLogin", err)
        res.redirect("/admin")
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
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup') </script>`);
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
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);
    }
};

restuarantController.logout = async(req: AdminRequest, res: Response) =>{
    try{
        console.log("logout")
        req.session.destroy(function(){
            res.redirect("/admin");
        });
    } catch(err){
        console.log("Error, logout", err);
        res.redirect("/admin");
    }
};


restuarantController.checkAuthSession = async(
  req: AdminRequest,
  res: Response
) =>{
  try{
    console.log("checkAuthSession");
    if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  }catch(err){
 console.log("Error, checkAuthSession", err);
 res.send(err);
  }
};
restuarantController.verifyRestuarant = async(
    req: AdminRequest,
    res: Response, 
    next: NextFunction) =>{
        if(req.session?.member?.memberType === MemeberType.RESTUARANT){
            req.member = req.session.member;
            next();
        }else{const message =Message.NOT_AUTHENTICATED;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`);
        
    };     
}; 



export default restuarantController;
