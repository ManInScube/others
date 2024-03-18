import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Address } from './addresses.model';
import { UsersService } from 'src/users/users.service';
import { AddAddressDto } from './dto/add-address.dto';

@Injectable()
export class AddressesService {

    constructor(@InjectModel(Address)
    private addressModel: typeof Address,
    private readonly usersService: UsersService,
    ){}
  
    async findAll(userId: number | string): Promise<Address[]>{
      return this.addressModel.findAll({where:{userId}})
    }
  
    async add(addAddressDto: AddAddressDto){
      const address = new Address();
      const user = await this.usersService.findOne({where: {id: addAddressDto.userId}});
  
      address.userId = user.id;
      address.city = addAddressDto.city;
      address.street = addAddressDto.street;
      address.house = addAddressDto.house;
      address.apartment = addAddressDto.apartment;
  
      return address.save()
  
    }
}
