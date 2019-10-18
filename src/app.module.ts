import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';

@Module({
  imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: 'root',
            database: 'books',
            entities: [Book],
            synchronize: true,
        }),
        BooksModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
