import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import configKeys from './config/configKeys';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(configKeys.MONGODB_CLOUD_URI),
    RestaurantsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
