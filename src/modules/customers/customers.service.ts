import { Injectable, Inject } from '@nestjs/common';

import { Customer } from './customer.entity';
import { CUSTOMER_REPOSITORY } from '../../core/constants';

@Injectable()
export class CustomersService {
    constructor(@Inject(CUSTOMER_REPOSITORY) private readonly customerRepository: typeof Customer) { }

    async findAll(): Promise<Array<Customer>> {
        return await this.customerRepository.findAll<Customer>({ where: {} });
    }

    async findOneById(id: number): Promise<Customer> {
        return await this.customerRepository.findOne<Customer>({ where: { id } });
    }
}
