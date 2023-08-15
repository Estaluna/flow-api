import { IsUUID } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: number;
}
