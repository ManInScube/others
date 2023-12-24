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

const mockedUser = {
    name: "Name",
    lastname: "Lastname",
    phone:  "99999999999",
    email: "Marat@tatmail.com",
    password: "Pass123"
}

describe('Auth Controller', ()=>{
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

        user.name = mockedUser.name;
        user.lastname = mockedUser.lastname;
        user.phone = mockedUser.phone;
        user.email = mockedUser.email;
        user.password = hashedPassword;

        return user.save();

    });

    afterEach(async () => {
        await User.destroy({ where: { email: mockedUser.email } });
    });

    it('should login user', async ()=>{

        const response = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.email, password: mockedUser.password });
  
      expect(response.body.user.email).toBe(mockedUser.email);
      expect(response.body.msg).toBe('Logged in');
      //expect(response.body.user.email).toBe(mockedUser.email);
    });

    it('should check if login', async()=>{
        const login = await request(app.getHttpServer())
        .post('/users/login')
        .send({ username: mockedUser.email, password: mockedUser.password });

        const loginCheck = await request(app.getHttpServer())
        .get('/users/login-check')
        .set('Cookie', login.headers['set-cookie']);

        expect(loginCheck.body.name).toBe(mockedUser.name);
        expect(loginCheck.body.email).toBe(mockedUser.email);
    })

    it('should logout', async()=>{
        const response = await request(app.getHttpServer())
        .get('/users/logout')

        expect(response.body.msg).toBe("session is ended");
    })
});