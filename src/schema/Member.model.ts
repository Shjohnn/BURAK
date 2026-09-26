import mongoose, {Schema} from "mongoose";
import { MemeberStatus, MemeberType } from "../libs/enums/member.enum";

//Schema first & Code first// biz schema based quramiz

const memberSchema = new Schema({
    memberType:{
        type:String,
        enum:MemeberType,
        default:MemeberType.USER
    },
    memberStatus : {
        type:String,
        enum:MemeberStatus,
        default:MemeberStatus.ACTIVE
    },
    memberNick: {
        type:String,
        index: {unique:true, sparse:true},
        required:true
    },
    memberPhone : {
        type:String,
        index:{unique:true,sparse:true},
        required:true
        },
    memberPassword: {
        type:String,
        select:false,
        required:true
    },
    memberAddress :{
        type:String
    },
    memberDesc : {
        type:String
    },
    memberImage : {
        type:String
    },
    memberPoints : {
        type:Number,
        default:0
    }
},
{timestamps:true} //createdAt, updatedAt ni ozi qoyadi
)

export default mongoose.model("Member", memberSchema)