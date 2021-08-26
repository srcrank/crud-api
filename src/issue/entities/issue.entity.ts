import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Issue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    title: string;

    @Column()
    user: string;

    @Column()
    comments: number;

    @Column()
    body: string;
}