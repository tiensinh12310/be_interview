import { Controller, Get, Post, Body, Request, Param } from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { RoomsService } from './rooms.service';
import { CustomerRoom } from "../../entities/CustomerRoom.entity";
import { CustomerRoomDto } from "../../dto/customerRoom.dto";

@ApiTags('Rooms')
@Controller('room')
export class RoomsController {
  constructor(private readonly roomService: RoomsService) { }

  @Get('/:customerId/:date')
  @ApiCreatedResponse({
    description: 'Get list room by date'
  })
  async findAll(@Param('customerId') customerId : number, @Param('date') date : Date) {
    return await this.roomService.findAll(customerId, date);
  }

  @Post('/booking')
  @ApiCreatedResponse({
    description: 'Booking room'
  })
  async Booking(@Body() body: CustomerRoomDto): Promise<CustomerRoom> {
    return await this.roomService.booking(body);
  }
}
