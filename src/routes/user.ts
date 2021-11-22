import express from "express";

import UserValidator from '../validators/user';
import MiddleWare from '../middleware';
import UserController from '../controllers/user';

const router = express.Router();

router.post(
  '/',
  UserValidator.checkCreateUser(),
  MiddleWare.handleValidationError,
  UserController.createUser,
)

router.get(
  '/',
  UserValidator.checkReadUser(),
  MiddleWare.handleValidationError,
  UserController.getUsers,
)

router.get(
  '/:id',
  UserValidator.checkUserParam(),
  MiddleWare.handleValidationError,
  UserController.getUser
)

router.delete(
  '/:id',
  UserValidator.checkUserParam(),
  MiddleWare.handleValidationError,
  UserController.deleteUser
)

export default router;
