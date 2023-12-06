import {Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { IProductsQuery } from './types';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product)
    private productModel: typeof Product
    ){}


    async paginateAndFilter(query: IProductsQuery): Promise<{count: number; rows: Product[]}>{
        const limit = +query.limit;
        const offset = +query.offset * 20;
        return this.productModel.findAndCountAll({
            limit,
            offset
        });
    }

    async findOne(id: number | string): Promise<Product>{
        return this.productModel.findOne({
            where: {id},
        });
    }

    async findOneByName(name: string): Promise<Product>{
        return this.productModel.findOne({
            where: {name},
        });
    }

    async searchByString(str: string): Promise<{count: number; rows: Product[]}>{
        return this.productModel.findAndCountAll({
            limit: 10,
            where: {name: {[Op.like]: `%${str}%`}},
        });
    }
}
