import { Model, Column, Table, BelongsTo, ForeignKey, Unique, Index, Sequelize } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { Customer } from '../modules/customers/customer.entity';
import { Room } from '../modules/rooms/room.entity';
import * as moment from "moment";

@Table({
  indexes: [
    {
      name: 'customer_room_date',
      unique: true,
      fields: ['roomId', 'customerId', 'date']
    }
  ]
})
export class CustomerRoom extends Model<CustomerRoom> {
  @ForeignKey(() => Room)
  @Column
  roomId: number;

  @ForeignKey(() => Customer)
  @Column
  customerId: number;

  @Column
  date: Date;

  @BelongsTo(() => Room)
  room: Room;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column
  customerRoomDate: string;

}
