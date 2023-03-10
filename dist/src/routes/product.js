"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const product_1 = require("../controllers/product");
const validateSchema_1 = require("../utils/validateSchema");
const product_2 = require("../joi-schema/product");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(product_1.getAll)
    .post((0, validateSchema_1.validateRequest)(product_2.createProductSchema), product_1.create);
router
    .route('/:id')
    .get(product_1.findById)
    .patch((0, validateSchema_1.validateRequest)(product_2.productUpdateSchema), product_1.update)
    .delete(product_1.remove);
exports.ProductRouter = router;
//# sourceMappingURL=product.js.map