import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('suul')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('main-page')
  root() {
    const message = this.appService.getHello();
    
    return {message}; 
  }
}
