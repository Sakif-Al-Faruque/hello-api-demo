import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloForPost(): string {
    return "this is from post";
  }

  @Post('/hello')
  getHelloForPostAgain(): string {
    return "this is from post of another";
  }
}
