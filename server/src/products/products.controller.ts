import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { FindOneResponse, GetBestsellersResponse, GetByNameRequest, GetByNameResponse, GetNewResponse, PaginateAndFilterResponse, SearchRequest, SearchResponse } from './types';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @ApiOkResponse({type: PaginateAndFilterResponse })
    @Get()
    @UseGuards(AuthenticatedGuard)
    paginateAndFiler(@Query() query){
        return this.productsService.paginateAndFilter(query);
    }

    @ApiOkResponse({type: GetBestsellersResponse })
    @Get('bestsellers')
    @UseGuards(AuthenticatedGuard)
    getBestsellers(){
        return this.productsService.findBestseller();
    }

    @ApiOkResponse({type: GetNewResponse})
    @Get('new')
    @UseGuards(AuthenticatedGuard)
    getNew(){
        return this.productsService.findNew();
    }

    @ApiOkResponse({type: FindOneResponse})
    @Get('find/:id')
    @UseGuards(AuthenticatedGuard)
    getOne(@Param('id') id: string){
        return this.productsService.findOne(+id);
    }

    @ApiOkResponse({type: SearchResponse})
    @ApiBody({type: SearchRequest})
    @Post('search')
    @UseGuards(AuthenticatedGuard)
    search(@Body() {search} : {search : string}){
        return this.productsService.searchByString(search);
    }

    @ApiOkResponse({type: GetByNameResponse})
    @ApiBody({type: GetByNameRequest})
    @Post('name')
    @UseGuards(AuthenticatedGuard)
    getByName(@Body() {name} : {name : string}){
        return this.productsService.findOneByName(name);
    }
}
