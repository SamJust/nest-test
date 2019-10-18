import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findBooks(filter, { skip, limit, sort = 'author' }): Promise<Book[]> {
    return this.bookRepository.find({
        where: filter,
        skip: limit && skip,
        take: limit,
        order: { [sort]: 'ASC' }
    });
  }

  createBook(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  updateBook(id: number, book: Book) {
    return this.bookRepository.update({ id }, book);
  }
}