import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Restaurant } from './schemas/restaurant.schema';
// import { Query } from  '@types/express-serve-static-core';
 import { Query } from  'express-serve-static-core';


@Injectable()
export class RestaurantsService {
    constructor(
        @InjectModel(Restaurant.name)
        private restaurantModel: mongoose.Model<Restaurant>
    ){}


    // get all restaurants route
    async findAll(query: Query): Promise<Restaurant[]> {

        query && console.log(query)

        //___pagination
        const pageDefault = 2;
        const responsePerPage = 2;
        const isCurrentPage =   Number(query.page) || pageDefault;
        const skip = responsePerPage * (isCurrentPage - 1);

        //___search query
           const queryStringKeyword = query.keyword ? {
               name: {
                   $regex: query.keyword,
                   $options: 'i'
               }
           }:{}

           console.log(queryStringKeyword)

        const foundRestaurants = await this.restaurantModel.find({...queryStringKeyword})
                                                            //limit page results
                                                            .limit(responsePerPage)
                                                            .skip(skip)

        console.log(foundRestaurants)
            return foundRestaurants;       
    }

    // create restaurant
    async create(restaurant: Restaurant): Promise<Restaurant>{
        const res = await this.restaurantModel.create(restaurant);
        return res;
    }


    //find restaurant byId get => restaurant/:id
    async findByID(id: string,): Promise<Restaurant>{
        const foundRestaurant = await this.restaurantModel.findById(id);
        // console.log(foundRestaurant)
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
        
    //delete restaurant end point 
    async deleteById(id: string): Promise<Restaurant> {
        return await this.restaurantModel.findByIdAndDelete(id)
       // return await this.restaurantModel.findByIdAndRemove(id)
    }
     

}



