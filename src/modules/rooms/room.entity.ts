import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { CustomerRoom } from '../../entities/CustomerRoom.entity';

@Table
export class Room extends Model<Room> {
    @ApiProperty({ description: 'The name of the Customer', example: 1 })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    name: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updatedAt: Date;

    @HasMany(() => CustomerRoom)
    customerRooms: CustomerRoom[];
}
