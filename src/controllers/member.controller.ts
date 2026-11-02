import {T} from "../libs/types/common";
import {NextFunction, Request,Response} from "express";
import MemberService from "../models/Member.service";
import { ExtendedRequest, LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import { MemeberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
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


memeberController.logout = (req:ExtendedRequest, res: Response) => {
    try{
        res.cookie("accessToken", null, {maxAge:0, httpOnly: true});
        res.status(HttpCode.OK).json({logout:true});
    } catch(err) {
        console.log("Error login", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};



memeberController.getMemberDetail =  async (req:ExtendedRequest, res: Response) => {
    try{
        const result = await memberService.getMemberDetail(req.member);
        res.status(HttpCode.OK).json(result)
    } catch(err) {
        console.log("Error getMemberDetail", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memeberController.updateMember = async (req:ExtendedRequest, res: Response) => {
    try{
        const input:MemberUpdateInput=req.body;
        if(req.file) input.memberImage=req.file.path.replace(/\\/, "/"); // Replace backslashes with forward slashes for cross-platform compatibility
        const result = await memberService.updateMember(req.member, input);
        res.status(HttpCode.OK).json(result)
        
    } catch(err) {
        console.log("Error updateMember", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);


        
    }}
 memeberController.getTopUsers = async (req:Request, res: Response) => {
    try{
        const result = await memberService.getTopUsers();
        res.status(HttpCode.OK).json(result)
    } catch(err) {
        console.log("Error getTopUsers", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}



memeberController.verifyAuth = async (
    req: ExtendedRequest, 
    res: Response, 
    next:NextFunction
) => {
    try {
        const token = req.cookies["accessToken"];
        if(token) req.member = await authService.checkAuth(token);

        if (!req.member) throw new Errors(HttpCode.UNATHORIZED, Message.NOT_AUTHENTICATED);
        next();
    } catch(err) {
        console.log("Error verifyAuth", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};




memeberController.retrieveAuth = async (
    req: ExtendedRequest, 
    res: Response, 
    next:NextFunction
) => {
    try {
        const token = req.cookies["accessToken"];
        if(token) req.member = await authService.checkAuth(token);

        next();
    } catch(err) {
        console.log("Error retrieveAuth", err);
        next();
        
    }
};




export default memeberController ;