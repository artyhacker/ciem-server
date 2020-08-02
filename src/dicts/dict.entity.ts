import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Dict {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
