import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import configKeys from './config/configKeys';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';



       console.log("here is the confire öööööööööööööö") 
@Module({
  imports: [

                ConfigModule.forRoot(
                                      { envFilePath: '.env.development', isGlobal:true} // can  add other custom files in an array

                ),

                MongooseModule.forRoot(
                     //__ok   `mongodb+srv://${configKeys.DATABASE_USERNAME}:${configKeys.DATABASE_PASSWORD}@${configKeys.DATABASE_HOST}/${configKeys.DATABASE_NAME}?${configKeys.DATABASE_OPTION}`,

                      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?${process.env.DATABASE_OPTION}`,

                  ),
                RestaurantsModule
              ],
              controllers: [AppController],
              providers: [AppService],
})

export class AppModule {}
