import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '@repo/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HealthResponse {
    return this.appService.getHello();
  }
}
