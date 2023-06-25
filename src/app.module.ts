import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { CustomersModule } from './modules/customers/customers.module'
import { RoomsModule } from './modules/rooms/rooms.module';
@Module({
  imports: [
    DatabaseModule,
    CustomersModule,
    RoomsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
