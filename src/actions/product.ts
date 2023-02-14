import { Product } from "../models/product";
import { paginate } from "../utils/paginate";


type ProductType ={
    _id?: string;
    name: string;
    price: number;
    description: string;
}

export class ProductActions {


    async getAll(filter:Partial<ProductType>, query:Record<string,unknown>) {
        return await paginate( Product.find(filter), query);
    }

    async create(product: ProductType) {

        return await Product.create(product);
    }

    async findOne(filter:Partial<ProductType>){
        return await Product.findOne(filter);
    }

    async updateOne(filter:Partial<ProductType>, update:Partial<ProductType>){
        return await Product.findOneAndUpdate(filter, update, {new: true});
    }

    async deleteOne(filter:Partial<ProductType>){
        return await Product.findOneAndDelete(filter);
    }
}