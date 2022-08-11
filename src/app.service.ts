import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Chào mừng bạn đến với trà sữa của tui!';
  }
}
