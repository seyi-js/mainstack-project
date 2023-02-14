import { Router } from 'express';
import {
  create,
  findById,
  getAll,
  remove,
  update,
} from '../controllers/product';
import { validateRequest } from '../utils/validateSchema';
import {
  createProductSchema,
  productUpdateSchema,
} from '../joi-schema/product';

const router = Router();

router
  .route('/')
  .get(getAll)
  .post(validateRequest(createProductSchema), create);

router
  .route('/:id')
  .get(findById)
  .patch(validateRequest(productUpdateSchema), update)
  .delete(remove);

export const ProductRouter = router;
