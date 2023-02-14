import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { formatResponse, formatValidationErrors } from './response';

export const validateRequest =  (schema:Joi.ObjectSchema,) =>
    async (req: Request, res: Response, next:NextFunction) => {
      try {
        await schema.validateAsync(req.body, {
          abortEarly: false,
          recursive: true,
        });
      } catch (err) {
        const validationErrorHash = {};
        err.details.forEach((error) => {
          if (!validationErrorHash[error.path]) {
            validationErrorHash[error.path[0]] = [
              error.message.replaceAll(`"`, ``),
            ];
          } else {
            validationErrorHash[error.path[0]].push(error.message);
          }
        });

        const validationErrors = Object.keys(validationErrorHash).map(
          (key) => ({
            field: key,
            constraints: validationErrorHash[key],
          })
        );

        return formatValidationErrors({
          status: 400,
          message: 'Validation Error',
          res,
          errors: validationErrors,
        });
      }
      return next();
    };

