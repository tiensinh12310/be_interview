import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerRoomDto {
  @ApiProperty({
    description: 'CustomerId',
    example:
      1
  })
  @IsNotEmpty()
  readonly customerId: number;

  @ApiProperty({
    description: 'RoomId',
    example: 1,
  })
  @IsNotEmpty()
  @MinLength(2)
  readonly roomId: number;

  @ApiProperty({
    description: 'Date booking room',
    example:
      '2023-06-25',
  })
  @IsNotEmpty()
  readonly date: Date;
}
