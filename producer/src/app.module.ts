import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: '1-producer',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer_uuid:3cb4622d-b40f-4100-8cb6-1d128852951f',
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
