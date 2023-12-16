import { INestApplication } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing"
import { databaseConfig } from "src/config/configuration";
import { SequelizeConfigService } from "src/config/sequelizeConfig.service";
import * as session from 'express-session';
import * as passport from 'passport';
import { ProductsModule } from "src/products/products.module";
import { ProductsService } from "src/products/products.service";


describe('Auth Controller', ()=>{
    let app: INestApplication;
    let productsService: ProductsService;

    beforeEach(async()=>{
        const testModule: TestingModule = await Test.createTestingModule({
            imports: [
                SequelizeModule.forRootAsync({
                  imports: [ConfigModule],
                  useClass: SequelizeConfigService
                }),
                ConfigModule.forRoot({
                  load: [databaseConfig],
                }),
                ProductsModule,
              ],
        }).compile();

        productsService = testModule.get<ProductsService>(ProductsService);
        app = testModule.createNestApplication();

        app.use(
            session({
              secret: 'keyword',
              resave: false,
              saveUninitialized: false,
            })
          );
        
        app.use(passport.initialize());
        app.use(passport.session());
        await app.init();
    });

    it('should find by id', async ()=>{
        const product = await productsService.findOne(1);

        expect(product.dataValues).toEqual(
            expect.objectContaining(
                {
                    id: 1,
                    name: expect.any(String),
                    manufacturer: expect.any(String),
                    size: expect.any(String),
                    price: expect.any(Number),
                    description: expect.any(String),
                    color: expect.any(String),
                    images: expect.any(String),
                    in_stock: expect.any(Number),
                    vendor_code: expect.any(String),
                    new: expect.any(Boolean),
                    bestseller: expect.any(Boolean),
                    createdAt: expect.any(Date),
                    updatedAt: expect.any(Date)
                }
            )
        );
    });

    it('should find one by name', async ()=>{
        const product = await productsService.findOneByName('Cloth');

        expect(product.dataValues).toEqual(
            expect.objectContaining(
                {
                    id: expect.any(Number),
                    name: 'Cloth',
                    manufacturer: expect.any(String),
                    size: expect.any(String),
                    price: expect.any(Number),
                    description: expect.any(String),
                    color: expect.any(String),
                    images: expect.any(String),
                    in_stock: expect.any(Number),
                    vendor_code: expect.any(String),
                    new: expect.any(Boolean),
                    bestseller: expect.any(Boolean),
                    createdAt: expect.any(Date),
                    updatedAt: expect.any(Date)
                }
            )
        );
    });

    it('should find by search string', async ()=>{
        const search = 'cloth';

        const product = await productsService.searchByString(search);

        expect(product.rows.length).toBeLessThanOrEqual(10);
        product.rows.forEach((element)=>{
            expect(element.name.toLowerCase()).toContain(search);
            expect(element.dataValues).toEqual(
                expect.objectContaining(
                    {
                        id: expect.any(Number),
                        name: expect.any(String),
                        manufacturer: expect.any(String),
                        size: expect.any(String),
                        price: expect.any(Number),
                        description: expect.any(String),
                        color: expect.any(String),
                        images: expect.any(String),
                        in_stock: expect.any(Number),
                        vendor_code: expect.any(String),
                        new: expect.any(Boolean),
                        bestseller: expect.any(Boolean),
                        createdAt: expect.any(Date),
                        updatedAt: expect.any(Date)
                    }
                )
            );
        });
    });

    it('should find bestsellers', async ()=>{
        const product = await productsService.findBestseller();

        product.rows.forEach((element)=>{
            expect(element.dataValues).toEqual(
                expect.objectContaining(
                    {
                        id: expect.any(Number),
                        name: expect.any(String),
                        manufacturer: expect.any(String),
                        size: expect.any(String),
                        price: expect.any(Number),
                        description: expect.any(String),
                        color: expect.any(String),
                        images: expect.any(String),
                        in_stock: expect.any(Number),
                        vendor_code: expect.any(String),
                        new: expect.any(Boolean),
                        bestseller: true,
                        createdAt: expect.any(Date),
                        updatedAt: expect.any(Date)
                    }
                )
            );
        });
    });

    it('should find new ones', async ()=>{
        const product = await productsService.findNew();

        product.rows.forEach((element)=>{
            expect(element.dataValues).toEqual(
                expect.objectContaining(
                    {
                        id: expect.any(Number),
                        name: expect.any(String),
                        manufacturer: expect.any(String),
                        size: expect.any(String),
                        price: expect.any(Number),
                        description: expect.any(String),
                        color: expect.any(String),
                        images: expect.any(String),
                        in_stock: expect.any(Number),
                        vendor_code: expect.any(String),
                        new: true,
                        bestseller: expect.any(Boolean),
                        createdAt: expect.any(Date),
                        updatedAt: expect.any(Date)
                    }
                )
            );
        });
    });
});