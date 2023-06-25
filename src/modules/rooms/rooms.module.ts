import { Module } from '@nestjs/common';

import { RoomsService } from './rooms.service';
import { roomsProviders } from './rooms.providers';
import { RoomsController } from './rooms.controller';
import { CustomerRoom } from '../../entities/CustomerRoom.entity';

@Module({
  imports: [CustomerRoom],
  providers: [RoomsService, ...roomsProviders],
  controllers: [RoomsController],
  exports: [RoomsService],
})
export class RoomsModule {}
