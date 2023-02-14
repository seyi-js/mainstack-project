import { Request, Response } from 'express';
import joi from 'joi';
import { ProductActions } from '../actions/product';
import {
  createProductSchema,
  productUpdateSchema,
} from '../joi-schema/product';
import { formatResponse } from '../utils/response';
import { validateRequest } from '../utils/validateSchema';

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await new ProductActions().getAll({}, req.query);
    return formatResponse({
      data: products,
      status: 200,
      message: 'Products retrieved successfully.',
      res,
    });
  } catch (error) {
    return formatResponse({
      status: 500,
      message: 'Internal Server Error',
      res,
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const product = await new ProductActions().create(req.body);
    return formatResponse({
      data: product,
      status: 201,
      message: 'Product created successfully.',
      res,
    });
  } catch (error) {
    return formatResponse({
      status: 500,
      message: error,
      res,
    });
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    const product = await new ProductActions().findOne({ _id: req.params.id });
    return formatResponse({
      data: product,
      status: 200,
      message: 'Product retrieved successfully.',
      res,
    });
  } catch (error) {
    return formatResponse({
      status: 500,
      message: 'Internal Server Error',
      res,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const product = await new ProductActions().updateOne(
      { _id: req.params.id },
      req.body
    );

    return formatResponse({
      data: product,
      status: 200,
      message: 'Product updated successfully.',
      res,
    });
  } catch (error) {
    return formatResponse({
      status: 500,
      message: 'Internal Server Error',
      res,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await new ProductActions().deleteOne({ _id: req.params.id });

    return formatResponse({
      status: 200,
      message: 'Product deleted successfully.',
      res,
    });
  } catch (error) {
    return formatResponse({
      status: 500,
      message: 'Internal Server Error',
      res,
    });
  }
};
