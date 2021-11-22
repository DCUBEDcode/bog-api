import { BelongsTo, Column, Model, Table, ForeignKey } from 'sequelize-typescript';

import { Team } from './team';

@Table
export class Fixture extends Model<Fixture> {

  @Column opponent!: string;
  @Column kickOff!: Date;

  @BelongsTo(() => Team)
  team?: Team;

  @ForeignKey(() => Team)
  teamId?: number;

}
