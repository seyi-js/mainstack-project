import joi from 'joi';

export const createProductSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string().required(),
});

export const productUpdateSchema = joi.object({
    name: joi.string(),
    price: joi.number(),
    description: joi.string(),
})
