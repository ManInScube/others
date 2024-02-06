import {Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { IProductsFilter, IProductsQuery } from './types';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product)
    private productModel: typeof Product
    ){}


    async paginateAndFilter(query: IProductsQuery): Promise<{count: number; rows: Product[]}>{
        const limit = +query.limit;
        const offset = +query.offset * 20;
        const filter = {} as Partial<IProductsFilter>;

        if(query.priceFrom && query.priceTo){
            filter.price = {
                [Op.between]: [+query.priceFrom, +query.priceTo],
            }
        }

        if(query.type){
            filter.type = JSON.parse(decodeURIComponent(query.type))

        }

        return this.productModel.findAndCountAll({
            limit,
            offset,
            where: filter
        });
    }

    async findOne(id: number | string): Promise<Product>{
        return this.productModel.findOne({
            where: {id},
        });
    }

    async findBestseller(): Promise<{count: number; rows: Product[]}>{
        return this.productModel.findAndCountAll({
            where: {bestseller: true},
        });
    }

    async findNew(): Promise<{count: number; rows: Product[]}>{
        return this.productModel.findAndCountAll({
            where: {new: true},
        });
    }

    async getBestseller(bestseller: boolean): Promise<Product>{
        return this.productModel.findOne({
            where: {bestseller: true},
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
            where: { name: { [Op.like]: `%${str}%` } }
        });
    }
}
