import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { Op } from 'sequelize';

import { Room } from './room.entity';
import { CustomerRoom } from '../../entities/CustomerRoom.entity';
import { ROOM_REPOSITORY, CUSTOMER_ROOM_REPOSITORY } from '../../core/constants';
import { CustomerRoomDto } from '../../dto/customerRoom.dto';
import * as moment from 'moment-timezone';

@Injectable()
export class RoomsService {
    constructor(
      @Inject(ROOM_REPOSITORY) private readonly roomRepository: typeof Room,
      @Inject(CUSTOMER_ROOM_REPOSITORY) private readonly customerRoomRepository: typeof CustomerRoom
    ) { }

    async findAll(customerId: number, date: Date): Promise<Array<Room>> {
        console.log(moment.tz(date, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD'), '====')

        return await this.roomRepository.findAll<Room>({
            where: {
                [Op.or]: [
                    {
                        '$customerRooms.customerId$': null
                    },
                    {
                        '$customerRooms.date$': {
                            [Op.ne]: moment.tz(date, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD')
                        }
                    }
                ]
            },
            include: [
                {
                    model: CustomerRoom,
                    where: {},
                    required: false
                }
            ],
        });
    }

    async booking(body: CustomerRoomDto): Promise<CustomerRoom> {
        const { roomId, customerId, date } = body
        try {
            return await this.customerRoomRepository.create<CustomerRoom>({ roomId, customerId, date:  moment.tz(date, 'Asia/Ho_Chi_Minh').toDate() })
        } catch (e) {
            const fields = e?.fields

            if (Array.isArray(fields) && fields.indexOf('roomId') > -1) {
                throw new NotFoundException('This Room doesn\'t exist');
            } else if (Array.isArray(fields) && fields.indexOf('customerId') > -1) {
                throw new NotFoundException('This Customer doesn\'t exist');
            } else {
                throw new NotFoundException(`This Room is not available in the date: "${date}"`);
            }
        }

    }
}
