import { MemeberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput } from "../libs/types/member";
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
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED );


        try {const result =await this.memberModel.create(input)
        console.log("Passed here!!!");
        return result;
    } catch(err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED );
    }
    }
}

export default MemberService;