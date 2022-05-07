import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantsService {
      constructor(
          @InjectModel(Restaurant.name)
          private restaurantModel: mongoose.Model<Restaurant>,
      ){}

      //_____get all restaurants api => GET   /restaurants

        async findAll(): Promise<Restaurant[]> {
            
          const restaurants = await this.restaurantModel.find();

          console.log(restaurants +  "  restaurant services got fire<<<<<<<<<<<<<<<<<<<<<<<<<<")
             return  restaurants;
        }
}

