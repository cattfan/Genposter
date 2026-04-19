import { Injectable } from '@nestjs/common';
import type { HealthResponse } from '@repo/shared';

@Injectable()
export class AppService {
  getHello(): HealthResponse {
    return { message: 'Hello World!' };
  }
}
