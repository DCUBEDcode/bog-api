import {BelongsToMany, HasMany, Column, Model, Table } from 'sequelize-typescript';

import { User } from './user';
import { UserTeam } from './user-team';
import { Fixture } from './fixture';

@Table
export class Team extends Model<Team> {

  @Column
  name!: string;

  @Column
  badge!: string;

  @BelongsToMany(() => User, () => UserTeam)
  players?: User[];

  @HasMany(() => Fixture)
  fixtures?: Fixture[]

}
