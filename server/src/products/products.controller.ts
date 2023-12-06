import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    @UseGuards(AuthenticatedGuard)
    paginateAndFiler(@Query() query){
        return this.productsService.paginateAndFilter(query);
    }

    @Get('find/:id')
    @UseGuards(AuthenticatedGuard)
    getOne(@Param('id') id: string){
        return this.productsService.findOne(+id);
    }
}
