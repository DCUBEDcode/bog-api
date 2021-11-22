import { Sequelize } from 'sequelize-typescript'
import { User, UserRole, UserTeam, Team, Role, Fixture } from '../models';

const db = new Sequelize('app', '', '', {
  storage: './database.sqlite',
  dialect: 'sqlite',
  logging: false,
  models: [ User, UserRole, UserTeam, Team, Role, Fixture ]
});

export default db;
