import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Magima is testing routes Lets go postman!';
  }
}
