import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Restaurant } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectModel(Restaurant.name)
        private restaurantModel: mongoose.Model<Restaurant>
    ){}


    // get all restaurants route
    async findAll(): Promise<Restaurant[]> {
        const restaurants = await this.restaurantModel.find()
            return restaurants;       
    }

    // create restaurant
    async create(restaurant: Restaurant): Promise<Restaurant>{
        const res = await this.restaurantModel.create(restaurant);
        return res;
    }
}
