import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'item'})
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  quantityType: string;

  @Column()
  category: number;

  @Column()
  complete: Boolean;
}