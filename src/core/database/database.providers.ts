import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const databaseConfig = require('./database.config');
import { Customer } from '../../modules/customers/customer.entity';
import { Room } from '../../modules/rooms/room.entity';
import { CustomerRoom } from '../../entities/CustomerRoom.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case TEST:
                    config = databaseConfig.test;
                    break;
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([Customer, Room, CustomerRoom]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
