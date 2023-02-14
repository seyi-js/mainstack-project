import { Router } from 'express';
import {
  create,
  findById,
  getAll,
  remove,
  update,
} from '../controllers/product';

const router = Router();

router.route('/').get(getAll).post(create);

router.route('/:id').get(findById).patch(update).delete(remove);

export const ProductRouter = router;
