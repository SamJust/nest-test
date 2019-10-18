import { Controller, Get, Query, Post, Body, Put, Param } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './book.entity';
import { URLSearchParams } from 'url';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getBooks(@Query() { sort, limit, skip, ...filter }): Promise<Book[]> {
        return this.bookService.findBooks(filter, { sort, limit, skip });
    }

    @Post()
    createBook(@Body() book): Promise<Book> {
        return this.bookService.createBook(book);
    }

    @Put(':bookId')
    async updateBook(@Body() book, @Param() { bookId }) {
        await this.bookService.updateBook(bookId, book);
    }
}
