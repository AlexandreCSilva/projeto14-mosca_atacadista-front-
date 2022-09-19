import joi from "joi";

const changeUserSchema = joi.object({
  name: joi.string().min(1).required(),
  profilePictureURL: joi.string().uri().allow(""),
});

export { changeUserSchema };
