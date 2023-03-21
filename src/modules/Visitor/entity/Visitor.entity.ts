import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Visitor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    hashedIpAddress: string;

    @CreateDateColumn()
    createdAt: Date;
}
