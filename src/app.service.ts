import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'restuaurants api testing--fine nine->';
  }
}
