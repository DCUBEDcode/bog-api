import { Model, Column, Table, ForeignKey } from "sequelize-typescript";

import { User } from "./user";
import { Team } from "./team";

@Table
export class UserTeam extends Model<UserTeam> {

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Team)
  @Column
  teamId!: number;
}
