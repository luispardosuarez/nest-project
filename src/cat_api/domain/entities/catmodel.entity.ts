import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class CatModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  origin: string;

  @Column({ type: 'varchar', length: 500 })
  description: string;
}
