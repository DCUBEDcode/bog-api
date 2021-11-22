import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Role extends Model<Role> {

  @Column
  name!: string;

}
