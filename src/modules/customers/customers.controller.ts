import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CustomersService } from './customers.service';
import { Customer as CustomerEntity } from './customer.entity';
import { CustomerDto } from './dto/customer.dto';

@ApiTags('Customer')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) { }

  @Get()
  @ApiCreatedResponse({
    description: 'Get list customer'
  })
  async findAll() {
    // get all customers in the db
    return await this.customerService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get One customer by Id'
  })
  async findOne(@Param('id') id: number): Promise<CustomerEntity> {
    // find the customer with this id
    const customer = await this.customerService.findOneById(id);

    // if the customer doesn't exit in the db, throw a 404 error
    if (!customer) {
      throw new NotFoundException('This Customer doesn\'t exist');
    }

    // if customer exist, return the customer
    return customer;
  }
}
