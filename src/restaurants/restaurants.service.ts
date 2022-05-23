import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
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


    //find restaurant byId get => restaurant/:id
    async findByID(id: string,): Promise<Restaurant>{
        const foundRestaurant = await this.restaurantModel.findById(id);
        console.log(foundRestaurant)
        if(!foundRestaurant){
            // throw new NotFoundException('Restaurant not found.')
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Restaurant not available',
              }, HttpStatus.FORBIDDEN)
        }
        return foundRestaurant;
    }

        // let update the restaurant endpoints by Id -----> /restaurants/:id

    async updateById(id: string, restaurant: Restaurant) {

            return this.restaurantModel.findByIdAndUpdate(id, restaurant, {
                new: true,
                runValidators:true
            })
        }      
     

}



