import { Response } from "express";


type ResponseType = {
  data?: any;
  status: number;
  message: string;
  res: Response;
};



export const formatResponse = (payload: ResponseType) => {
  const { data, status, message } = payload;

  return payload.res.status(payload.status).json({
    status,
    message,
    data,
  });
};

type ValidationResponseType = ResponseType & {
    errors: any[]
}

export const formatValidationErrors = (payload:ValidationResponseType) => {
    const { data, status, message, errors } = payload;

    

   return  payload.res.status(payload.status).json({
      status,
      message,
      data,
      errors
    });

}
