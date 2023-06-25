import { Module } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { customersProviders } from './customers.providers';
import { CustomersController } from './customers.controller';

@Module({
  providers: [CustomersService, ...customersProviders],
  controllers: [CustomersController],
  exports: [CustomersService],
})
export class CustomersModule {}
