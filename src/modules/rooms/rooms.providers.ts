import { Room } from './room.entity';
import { CustomerRoom } from '../../entities/CustomerRoom.entity';
import { ROOM_REPOSITORY, CUSTOMER_ROOM_REPOSITORY } from '../../core/constants';

export const roomsProviders = [
    {
        provide: ROOM_REPOSITORY,
        useValue: Room,
    },
    {
        provide: CUSTOMER_ROOM_REPOSITORY,
        useValue: CustomerRoom,
    },
];
