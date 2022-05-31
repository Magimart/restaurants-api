import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update.restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';

// import { Query as ExpressQuery} from 'express-serve-static-core';
import { Query as ExpressQuery } from 'express-serve-static-core';


 

@Controller('restaurants')
export class RestaurantsController {

    constructor(private restaurantsService: RestaurantsService ){}

  //get all resttuarants
   @Get() 
    async getAllRestaurants(@Query() query: ExpressQuery): Promise<Restaurant[]>{
        return this.restaurantsService.findAll(query)
    }

    // add new restaurant
    @Post()
    async createRestaurant(
          @Body() restaurant: CreateRestaurantDto): Promise <Restaurant>{
                     return this.restaurantsService.create(restaurant)
    }
    //get restaurant by id
    @Get(":id")
    async getRestaurantByID(
        @Param("id")
         id:string): Promise<Restaurant>{
             console.log(id)
            return this.restaurantsService.findByID(id)
        }
        
    @Put(":id")
        async updateRestaurant(
               @Param("id") id:string,
               @Body() 
               restaurant: UpdateRestaurantDto,
               ): Promise <Restaurant>{
                         await this.restaurantsService.findByID(id) // if passed param id is incorrect
                         return this.restaurantsService.updateById(id, restaurant)
    }


    @Delete(":id")
    async deleteRestaurant(
        @Param("id") id:string,
        ): Promise<{deleted: Boolean, message: string}> {
                  await this.restaurantsService.findByID(id) // if passed param id is incorrect

                  const restaurant = this.restaurantsService.deleteById(id)
                  if(restaurant){
                      let restaurantname = this.restaurantsService
                      console.log(restaurantname)
                      return {
                          deleted: true,
                          message: `success, the restaurant has been deleted` 
                          //message: `you have deleted this ${restaurant && restaurant}` //!!!-ck
                      }
                  } 
   }

}
