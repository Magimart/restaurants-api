import { Get, Controller } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';



@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantsService: RestaurantsService) {}
      
    @Get()
    async getAllRestaurants(): Promise<Restaurant[]> {
      return this.restaurantsService.findAll();
    }
}
