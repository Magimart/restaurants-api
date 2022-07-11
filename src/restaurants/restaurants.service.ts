import { Injectable, NotFoundException, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from './schemas/restaurant.schema';
 import { Query } from  'express-serve-static-core';
import GeoApiFeatures from '../utils/geoFeatures.utils';


@Injectable()
export class RestaurantsService {
    constructor(
        @InjectModel(Restaurant.name)
        private restaurantModel: mongoose.Model<Restaurant>
    ){}

    // get all restaurants route
    async findAll(query: Query): Promise<Restaurant[]> {

        // query && console.log(query)
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


        const foundRestaurants = await this.restaurantModel.find({...queryStringKeyword})
                                                            //limit page results
                                                            .limit(responsePerPage)
                                                            .skip(skip)

            return foundRestaurants;       
    }

    // create restaurant
    async createNewRestaurant(restaurant: Restaurant): Promise<Restaurant>{


        // restaurantLocation         
        const restaurantLocation  = await GeoApiFeatures.Location(restaurant.address)
         console.log("here is the loc to be created---lll------xx")
         console.log(restaurantLocation )

        const addRestaurantWithLoc = Object.assign(restaurant, {restaurantLocation })

        const res = await this.restaurantModel.create(addRestaurantWithLoc);
    
        console.log("here is the created res--------------xx")
        console.log(addRestaurantWithLoc)

        console.log(res)
       
        return res;
    }


    //find restaurant byId get => restaurant/:id
    async findByID(id: string,): Promise<Restaurant>{

        const isValidParamId = mongoose.isValidObjectId(id)
        if(!isValidParamId){
            throw new BadRequestException("you have provided wrong id, Kindly make sure the Id is correct")
        }

        const foundRestaurant = await this.restaurantModel.findById(id);
        foundRestaurant && console.log(foundRestaurant._id)
        console.log(foundRestaurant)

        if(!foundRestaurant){
            // throw new NotFoundException('Restaurant not found.')
               throw new NotFoundException('this Restaurant not found available',
            )
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



