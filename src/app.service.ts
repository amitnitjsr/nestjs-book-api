import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Bookstore Server!';
  }
}
