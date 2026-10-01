import { MemeberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput ,LoginInput} from "../libs/types/member";
import MemberModel from "../schema/Member.model";

class MemberService {
    private readonly memberModel;
    constructor () {
        this.memberModel=MemberModel;
    }
    public async proccesSignup(input:MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: MemeberType.RESTUARANT})
            .exec();
            console.log("already restuarant exists")
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);


        try{
           const result = await this.memberModel.create(input);
        result.memberPassword = "";
         return result;
     }catch{
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
     }
    }

     public async proccesLogin(input:LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                {memberNick:input.memberNick},
                {memberNick:1,memberPassword:1}
            )
            .exec();

        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = member.memberPassword === input.memberPassword;
        if (!isMatch) 
            throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
        
        return await this.memberModel.findById(member._id).exec();


     }

    }

export default MemberService;