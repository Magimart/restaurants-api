import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { RestaurantsService } from './restaurants/restaurants.service';
import { Restaurant } from './restaurants/schemas/restaurant.schema';

// @Controller()
// export class AppController {
//       constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
@Controller('restaurants')

export class AppController {
        constructor(private restaurantsService:RestaurantsService ) {}

  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll()
  }
}
