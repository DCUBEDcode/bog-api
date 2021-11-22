import { body, query, param } from "express-validator";

class UserValidator {
  checkCreateUser() {
    return [
      body("firstName")
        .notEmpty()
        .withMessage("The first name should not be empty"),
      body("lastName")
        .notEmpty()
        .withMessage("The last name should not be empty"),
      body("email")
        .notEmpty()
        .withMessage("The email should not be empty"),
      body("password")
        .notEmpty()
        .withMessage("The password should not be empty"),
    ]
  }

  checkReadUser() {
    return [
      query('limit')
        .optional()
        .isInt({ min: 1, max: 10 })
        .withMessage('The limit value should be a number and between 1-10'),
      query('offset')
        .optional()
        .isNumeric()
        .withMessage('Value should be a number')
    ]
  }

  checkUserParam() {
    return [
      param('id')
        .notEmpty()
        .withMessage('The id should be not empty')
        .isUUID(4).withMessage('The value should be uuidv4')
    ]
  }
}

export default new UserValidator();
