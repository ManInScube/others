import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddAddressDto } from './dto/add-address.dto';

@Controller('addresses')
export class AddressesController {
    constructor(private readonly addressesService: AddressesService){}

    @Get(':id')
    @UseGuards(AuthenticatedGuard)
    getAll(@Param('id') userId: string){
        return this.addressesService.findAll(userId);
    }

    @Post('/add')
    @UseGuards(AuthenticatedGuard)
    add(@Body() addressesService: AddAddressDto){
        return this.addressesService.add(addressesService);
    }
}


