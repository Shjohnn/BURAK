import {T} from "../libs/types/common";
import {Request,Response} from "express";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { MemeberType } from "../libs/enums/member.enum";
import Errors, { HttpCode } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const authService = new AuthService();
const memeberController: T = {}
const memberService = new MemberService();

memeberController.signup= async(req:Request,res:Response) =>{
    try {
        console.log("signup");
        const input:MemberInput = req.body,
         result:Member = await memberService.signup(input),
         token=  await authService.createToken(result ); 

         res.cookie("accessToken", token, {
            maxAge:AUTH_TIMER*3600*1000,
            httpOnly:false,
        })

        res.status(HttpCode.CREATED).json({ member: result, accessToken:token });
    } catch(err) {
        console.log("Error in signup", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};



memeberController.login=async(req:Request,res:Response) =>{
    try {
        console.log("logiaan");
        console.log("body:", req.body);
        const input:LoginInput = req.body,
          result = await memberService.login(input),
          token= await authService.createToken(result); //log da chqdi: token
          
        res.cookie("accessToken", token, {
            maxAge:AUTH_TIMER*3600*1000,
            httpOnly:false,
        })

        res.status(HttpCode.OK).json({ member: result, accessToken:token });
    } catch(err) {
        console.log("Error login", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};





export default memeberController;