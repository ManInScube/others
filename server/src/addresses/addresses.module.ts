import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from './addresses.model';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports:[
    SequelizeModule.forFeature([Address]),
    UsersModule
  ],
  controllers: [AddressesController],
  providers: [AddressesService]
})
export class AddressesModule {}
