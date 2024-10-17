import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDocumentation(): string {
    return 'This is the documentation';
  }
}
