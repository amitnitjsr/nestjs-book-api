import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private booksRepository: Repository<Book>) {}

  create(createBookDto: CreateBookDto) {
    const newBook = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(newBook);
  }

  async findAll(page: number, per_page: number, search: string) {
    const skip = (page - 1) * per_page;

    const [result, total] = await this.booksRepository.findAndCount({
      where: {
        title: Like(`%${search}%`),
      },
      skip,
      take: per_page,
    });
    return { data: result, total };
  }

  findOne(id: number) {
    return this.booksRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.findOne(id);
    return this.booksRepository.save({ ...book, ...updateBookDto });
  }

  async remove(id: number) {
    const book = await this.findOne(id);
    return this.booksRepository.remove(book);
  }
}
