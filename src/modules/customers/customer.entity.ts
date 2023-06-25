import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Customer extends Model<Customer> {
    @ApiProperty({ description: 'The name of the Customer', example: 1 })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    name: string;

    @ApiProperty({ description: 'The email of the Customer', example: 1 })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email: string;

    @ApiProperty({ description: 'The address of the Customer', example: 1 })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    address: string;

    @ApiProperty({ description: 'The gender of the Customer', example: 1 })
    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: true,
    })
    gender: string;

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
}
