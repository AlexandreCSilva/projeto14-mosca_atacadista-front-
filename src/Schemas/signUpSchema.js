import joi from "joi";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

const JoiPassword = Joi.extend(joiPasswordExtendCore);
const signUpSchema = joi.object({
  name: joi.string().min(1).required(),
  email: Joi.alternatives().try(
    Joi.string()
      .email({ tlds: { allow: false } })
      .required(),

    Joi.string().required()
  ),
  profilePictureURL: joi
    .string()
    .uri()
    .allow("")
    .default(
      "https://www.chocolatebayou.org/wp-content/uploads/No-Image-Person-2048x2048.jpeg"
    ),
  password: JoiPassword.string()
    .min(8)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(),
  confirmPassword: Joi.string().allow(Joi.ref("password")).required(),
});

export { signUpSchema };
