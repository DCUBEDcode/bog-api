import { Request, Response } from 'express';

import { User } from '../models/user';

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await User.create({
        ...req.body,
      })

      return res.json({ user, msg: 'Successfully created User'});
    } catch (e) {
      console.log(e);
      return res.json({ msg: 'Failed to create user', status: 500, route: '/user' })
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const records = await User.findAll({where: {}, limit, offset})
      return res.json(records);
    } catch (e) {
      return res.json({ msg: 'Failed to read users', status: 500, route: '/user' })
    }
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });
      return res.json(user);
    } catch (e) {
      return res.json({ msg: `Failed to find user with id: ${id}`, status: 500, route: '/user' })
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.json({ msg: 'Can not find existing user'})
      }

      const deletedUser = await user.destroy();
      return res.json({ user: deletedUser });
    } catch (e) {
      return res.json({
        msg: 'fail to delete',
        status: 500,
        route: `/users/${id}`
      })
    }
  }
}

export default new UserController();
