import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('1-producer')
    private readonly client: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return 'hello nestjs microservice';
  }

  @Get('kafka-test')
  testKafka() {
    const payload = {
      message: 'magic',
      date: new Date().toString(),
    };

    return this.client.emit('MyTopic', payload);
  }
}
