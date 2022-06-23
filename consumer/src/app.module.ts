import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: '1-consumer',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'consumer_uuid:76f0a165-c6e3-4ebd-ac84-9b56928f9dfc',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'group_uuid:89cbdbba-804f-45e3-9acf-d23fefc0c0c2',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
