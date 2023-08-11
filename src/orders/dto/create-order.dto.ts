import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ required: true })
  @IsNumber()
  bookId: number;

  @ApiProperty({ required: true })
  @IsNumber()
  quantity: number;

  @ApiProperty({ required: true })
  @IsNumber()
  totalPrice: number;
}
