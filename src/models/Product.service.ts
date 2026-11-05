import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import Errors,{ HttpCode , Message} from "../libs/Errors";
import { T } from "../libs/types/common";
import { ProductInput ,Product, ProductUpdateInput, ProductInquiry} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewGroup } from "../libs/enums/view.enum";
import { ViewInput } from "../libs/types/view";


class ProductService {
    private readonly productModel;
    public viewService;

    constructor() {
        this.productModel = ProductModel;
        this.viewService = new ViewService();
    }

    //SPA
    public async getProducts(inquiry:ProductInquiry):Promise<Product[]>{
        const match : T = {productStatus: ProductStatus.PROCESS};
        if(inquiry.productCollection) match.productCollection = inquiry.productCollection;
        if(inquiry.search) match.productName = {$regex: new RegExp(inquiry.search, "i")};  //case-insensitive
        const sort: T = inquiry.order === "productPrice" 
        ? {[inquiry.order]: 1 }
        :{[inquiry.order]: -1};  //{productPrice: 1} : {productViews: -1} AI berdi
         const result = await this.productModel.aggregate([
            {$match: match},
            {$sort: sort},
            {$skip: (inquiry.page*1 - 1) * inquiry.limit},
            {$limit: inquiry.limit*1}
         ]).exec();

         if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
         
        return result;

    };


public async getProduct(id: string, memberId: ObjectId | null): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel
        .findOne({ _id: productId, productStatus: ProductStatus.PROCESS })
        .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    if (memberId) {
        // view log mavjudligini tekshirish
        const input: ViewInput = {
            viewGroup: ViewGroup.PRODUCT,
            memberId: memberId,
            viewRefId: productId,
        };
        const existView = await this.viewService.checkViewExistence(input);
        console.log("existView:", !!existView);

        // yangi view bo'lsagina log yozib, sonni oshiramiz
        if (!existView) {
            console.log("planning to insert a new view log");
            await this.viewService.insertMemberView(input);

            result = await this.productModel
                .findByIdAndUpdate(
                    productId,
                    { $inc: { productViews: 1 } },
                    { new: true }
                )
                .exec();
        }
    }

    return result as Product;
}
   
    //SSR
    public async getAllProducts():Promise<Product[]>{
            //string=> ObjectId
            const result = await this.productModel.find().exec()
            if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
            return result
}


    public async createNewProduct(input:ProductInput):Promise<Product> {
        try {
            return await this.productModel.create(input)
        } catch(err){
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }

    public async updateChosenProduct(id:string,
        input:ProductUpdateInput):Promise<Product>{
            //string=> ObjectId
            id = shapeIntoMongooseObjectId(id);
            const result = await this.productModel.findOneAndUpdate({_id:id}, input,{new:true}).exec();
            if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.UPDATE_FAILED)
            return result
    }
}

export default ProductService