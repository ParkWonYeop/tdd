import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLocalInfo(): string {
    return 'Hello World!';
  }
}
