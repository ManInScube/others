import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AddToCartResponse, GetAllResponse, UpdateCountRequest, UpdateCountResponse, UpdateTotalPriceRequest, UpdateTotalPriceResponse } from './types';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService){}
    
    @ApiOkResponse({type: [GetAllResponse]})
    @Get(':id')
    @UseGuards(AuthenticatedGuard)
    getAll(@Param('id') iserId: string){
        return this.shoppingCartService.findAll(iserId);
    }

    @ApiOkResponse({type: AddToCartResponse})
    @Post('/add')
    @UseGuards(AuthenticatedGuard)
    add(@Body() addToCartDto: AddToCartDto){
        return this.shoppingCartService.add(addToCartDto);
    }

    @ApiOkResponse({type: UpdateCountResponse})
    @ApiBody({type: UpdateCountRequest})
    @Patch('/count/:id')
    @UseGuards(AuthenticatedGuard)
    updateCount(@Body() {count}: {count: number},
                @Param('id') productId: string
    ){
        return this.shoppingCartService.updateCount(count, productId);
    }

    @ApiOkResponse({type: UpdateTotalPriceResponse})
    @ApiBody({type: UpdateTotalPriceRequest})
    @Patch('/total_price/:id')
    @UseGuards(AuthenticatedGuard)
    updateTotalPrice(@Body() {total_price}: {total_price: number},
                @Param('id') productId: string
    ){
        return this.shoppingCartService.updateTotalPrice(total_price, productId);
    }

    @Delete('/one/:id')
    @UseGuards(AuthenticatedGuard)
    removeOne(@Param('id') productId: number){
        return this.shoppingCartService.remove(productId);
    }

    @Delete('/all/:id')
    @UseGuards(AuthenticatedGuard)
    removeAll(@Param('id') userId: number){
        return this.shoppingCartService.removeAll(userId);
    }
}
