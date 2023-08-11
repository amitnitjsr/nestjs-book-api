import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BooksModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
