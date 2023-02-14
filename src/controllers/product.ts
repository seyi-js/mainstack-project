import { Request, Response } from 'express';
import { ProductActions } from '../actions/product';

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
    console.log(error);
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
      message: 'Internal Server Error',
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

type ResponseType = {
  data?: any;
  status: number;
  message: string;
  res: Response;
};

const formatResponse = (payload: ResponseType) => {
  const { data, status, message } = payload;

  return payload.res.status(payload.status).json({
    status,
    message,
    data,
  });
};
