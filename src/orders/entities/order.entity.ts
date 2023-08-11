import { IsNumber, Max, Min } from 'class-validator';
import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsNumber()
  quantity: number;

  @Column()
  @IsNumber()
  totalPrice: number;

  @Column()
  @IsNumber()
  @Min(1)
  @Max(99)
  discountRate: number;
}
