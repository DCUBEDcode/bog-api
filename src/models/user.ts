import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';

import { Team } from './team';
import { Role } from './role';
import { UserTeam } from './user-team';
import { UserRole } from './user-role';

@Table
export class User extends Model<User> {

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles!: Role[];

  @BelongsToMany(() => Team, () => UserTeam)
  teams?: Team[];
  
}
