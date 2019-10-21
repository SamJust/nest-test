import { Controller, Get, Query, Post, Body, Put, Param, UsePipes } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './book.entity';
import { JoiValidationPipe } from './validationPipe';
import updateBookSchema from './schemas/updateBookSchema';
import createBookSchema from './schemas/createBookSchema';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getBooks(@Query() { sort, limit, skip, ...filter }): Promise<Book[]> {
        return this.bookService.findBooks(filter, { sort, limit, skip });
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createBookSchema))
    createBook(@Body() book: Book): Promise<Book> {
        return this.bookService.createBook(book);
    }

    @Put(':bookId')
    @UsePipes(new JoiValidationPipe(updateBookSchema))
    async updateBook(@Body() book, @Param() { bookId }) {
        await this.bookService.updateBook(bookId, book);
    }
}
