import { MemeberStatus, MemeberType } from "../enums/member.enum";


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