import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import     { ConfigModule, } from '@nestjs/config';


console.log(process.env.NODE_ENV)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI_LOCAL),
        //  MongooseModule.forRoot('mongodb://localhost:27017/restaurantsApi'), 
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}



