import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    author: string;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    releaseDate: string;

    @Column({ length: 255 })
    description: string;

    @Column({ length: 255 })
    image: string;
}