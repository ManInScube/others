import { Injectable } from '@nestjs/common';
import { ShoppingCart } from './shopping-cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { createConnection } from 'mysql2/promise';

@Injectable()
export class ShoppingCartService {
    constructor(@InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService
    ){}

    async findAll(userId: number | string): Promise<ShoppingCart[]>{
        return this.shoppingCartModel.findAll({where:{userId}})
    }

    async add(addToCartDto: AddToCartDto){
        const cart = new ShoppingCart(); 
        const user = await this.usersService.findOne({where: {email: addToCartDto.email}});
        const product = await this.productsService.findOne(addToCartDto.productId);

        cart.userId = user.id;
        cart.productId = product.id;
        cart.manufacturer = product.manufacturer;
        cart.price = product.price;
        cart.color = product.color;
        cart.size = product.size;
        cart.in_stock = product.in_stock;
        cart.image = JSON.parse(product.images)[0];
        cart.name = product.name;
        cart.total_price = product.price;
    
        return cart.save();
    }

    async updateCount(count: number, productId: number | string): Promise<{count: number}>{
        await this.shoppingCartModel.update({count},{ where: {productId}})

        const product = await this.shoppingCartModel.findOne({where:{productId}});

        return {count: product.id}
    }

    async updateTotalPrice(total_price: number, productId: number | string): Promise<{total_price: number}>{
        await this.shoppingCartModel.update({total_price},{ where: {productId}})

        const product = await this.shoppingCartModel.findOne({where:{productId}});

        return {total_price: product.total_price}
    }

    async remove(productId: number): Promise<void>{
        const product = await this.shoppingCartModel.findOne({where: {productId}});

        await product.destroy();
    }

    async removeAll(userId: number): Promise<void>{
        const product = await this.shoppingCartModel.destroy({where: {userId}});
    }
}
