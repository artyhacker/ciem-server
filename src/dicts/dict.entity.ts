import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Dict {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
