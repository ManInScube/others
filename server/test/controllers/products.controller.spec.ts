import { INestApplication } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing"
import { databaseConfig } from "src/config/configuration";
import { SequelizeConfigService } from "src/config/sequelizeConfig.service";
import { User } from "src/users/users.model";
import * as request from 'supertest';
import * as session from 'express-session';
import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import { AuthModule } from "src/auth/auth.module";
import { ProductsModule } from "src/products/products.module";


const mockedUser = {
    username: "Marat",
    email: "Marat@tatmail.com",
    password: "Marat123"
}



describe('Products Controller', ()=>{
    let app: INestApplication;

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
                AuthModule,
              ],
        }).compile();

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

    beforeEach(async ()=>{
        const user = new User();

        const hashedPassword = await bcrypt.hash(mockedUser.password, 10);

        user.username = mockedUser.username;
        user.password = hashedPassword;
        user.email = mockedUser.email;

        return user.save();
    });


    afterEach(async () => {
        await User.destroy({ where: { username: mockedUser.username } });
    });

    it('should get one product', async ()=>{

        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.username, password: mockedUser.password });

        const response = await request(app.getHttpServer())
        .get('/products/find/1')
        .set('Cookie', login.headers['set-cookie']);
  
        expect(response.body).toEqual(
            expect.objectContaining({
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
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            })
        );

    });

    it('should get bestsellers', async ()=>{

        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.username, password: mockedUser.password });

        const response = await request(app.getHttpServer())
        .get('/products/bestsellers')
        .set('Cookie', login.headers['set-cookie']);
  
        expect(response.body.rows).toEqual(
            expect.arrayContaining([
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
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String)
                }
            ])
        );

    });

    it('should get new', async ()=>{

        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.username, password: mockedUser.password });

        const response = await request(app.getHttpServer())
        .get('/products/new')
        .set('Cookie', login.headers['set-cookie']);
  
        expect(response.body.rows).toEqual(
            expect.arrayContaining([
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
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String)
                }
            ])
        );

    });

    it('should search by string', async ()=>{
        const body = {search:'platok'};
        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.username, password: mockedUser.password });

        const response = await request(app.getHttpServer())
        .post('/products/search')
        .send(body)
        .set('Cookie', login.headers['set-cookie']);
  
        expect(response.body.rows.length).toBeLessThanOrEqual(10);
        response.body.rows.forEach((element)=>{
            expect(element.name.toLowerCase()).toContain(body.search);
        });
        expect(response.body.rows).toEqual(
            expect.arrayContaining([
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
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String)
                }
            ])
        );

    });

    it('should get one by name', async ()=>{
        const body = {name:'Platok'};
        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.username, password: mockedUser.password });

        const response = await request(app.getHttpServer())
        .post('/products/name')
        .send(body)
        .set('Cookie', login.headers['set-cookie']);
  
        expect(response.body).toEqual(
            expect.objectContaining(
                {
                    id: expect.any(Number),
                    name: 'Platok',
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
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String)
                }
            )
        );

    });


});