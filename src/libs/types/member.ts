import { Session } from "express-session";
import { MemeberStatus, MemeberType } from "../enums/member.enum";
import { Request } from "express";

export interface Member {
    memberType: MemeberType,
    memberStatus:MemeberStatus,
    memberNick:string;
    memberPhone:string;
    memberPassword?:string;
    memberAddress?:string;
    memberDesc?:string,
    memberImage?:string,
    memberPoints:number;
    createdAt:Date;
    updatedAt:Date;
}
export interface MemberInput {
    memberType?: MemeberType,
    memberStatus?:MemeberStatus,
    memberNick:string;
    memberPhone:string;
    memberPassword:string;
    memberAddress?:string;
    memberDesc?:string,
    memberImage?:string,
    memberPoints?:number;
}


export interface LoginInput {
    memberNick:string;
    memberPassword:string;
}


export interface AdminRequest extends Request {
    member: Member;
    session: Session & { member: Member };
}