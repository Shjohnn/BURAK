import {T} from "../libs/types/common";
import e, {Request,Response} from "express";
import Errors from "../libs/Errors";
import ProductService from "../models/Product.service";

const productService = new ProductService();
const productController: T = {}

productController.getAllProducts= async(req:Request,res:Response) =>{
    try {
        console.log("getAllProducts");
        res.render("products")
    } catch(err) {
        console.log("Error in getting all products", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct= async(req:Request,res:Response) =>{
    try {
        console.log("createNewProduct");

    } catch(err) {
        console.log("Error in creating new product", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.updateChosenProduct= async(req:Request,res:Response) =>{
    try {
        console.log("updateChosenProduct");

    } catch(err) {
        console.log("Error in updating chosen product", err);
        if (err instanceof Errors) res.status(err.code).json({ err}); 
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default productController;