import { shapeIntoMongooseObjectId } from "../libs/config";
import { MemeberStatus, MemeberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member, MemberInput ,LoginInput, MemberUpdateInput} from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import * as bcrypt from 'bcryptjs';


class MemberService {
    private readonly memberModel;
    constructor () {
        this.memberModel=MemberModel;
    }


    /*SPA (react)*/
    public async getRestaurant(): Promise<Member> {
        const result = await this.memberModel
            .findOne({memberType:MemeberType.RESTUARANT})
            .lean()  //js ni object ga aylantrb beradi
            .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        return result;
    };

    public async signup(input:MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);        

        try{
           const result = await this.memberModel.create(input);
        result.memberPassword = "";
         return result.toJSON();
     }catch(err){
        throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
     }
    }
    public async login(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
        .findOne(
            {memberNick: input.memberNick, 
            memberStatus: { $ne: MemeberStatus.DELETE},
            },
            {memberNick: 1, memberPassword: 1, memberStatus: 1}
        )
        .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        else if (member.memberStatus === MemeberStatus.BLOCK){
            throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
        }
       
        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );

        if(!isMatch){
            throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
        }

          return await this.memberModel.findById(member._id).lean().exec();

    }


    public async getMemberDetail(member: Member): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModel
      .findOne({ _id: memberId, memberStatus: MemeberStatus.ACTIVE })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  };

  public async updateMember(member:Member,input:MemberUpdateInput): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModel
      .findOneAndUpdate(
        { _id: memberId },
        input,
        { new: true }
      )
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  };

  public async getTopUsers(): Promise<Member[]> {
    const result = await this.memberModel
      .find({ 
        memberType: MemeberType.USER, 
        memberStatus: MemeberStatus.ACTIVE, 
        memberPoints: { $gte: 1} 
    })
      .sort({ memberPoints: -1 })
      .limit(4)
      .exec();
      if (!result || result.length === 0) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }


  public async addUserPoint(member:Member, point: number): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);

    return await this.memberModel
      .findOneAndUpdate(
        { _id: memberId, 
            memberType: MemeberType.USER, 
            memberStatus : MemeberStatus.ACTIVE}, //filter
        { $inc: { memberPoints: point } }, //update
        { new: true } // option
      )
      .exec();
  }

    /*SSR (adminka)*/


    public async proccesSignup(input:MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: MemeberType.RESTUARANT})
            .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try{
           const result = await this.memberModel.create(input);
        result.memberPassword = "";
         return result;
     }catch(err){
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
        const isMatch = await bcrypt.compare(input.memberPassword, member.memberPassword);   
        // const isMatch = member.memberPassword === input.memberPassword;
        if (!isMatch) 
            throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
        
        return await this.memberModel.findById(member._id).exec();


     }

        public async getUsers(): Promise<Member[]> {
            const result = await this.memberModel
            .find({memberType:MemeberType.USER})
            .exec();
            
            if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

            return result
    }

      public async updateChosenUser(input:MemberUpdateInput): Promise<Member> {
           input._id =shapeIntoMongooseObjectId(input._id)
           const result = await this.memberModel
           .findByIdAndUpdate({_id:input._id}, input, {new: true})
           .exec()
            
            if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

            return result
    }

    }



export default MemberService;