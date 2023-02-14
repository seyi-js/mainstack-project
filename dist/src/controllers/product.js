"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findById = exports.create = exports.getAll = void 0;
const product_1 = require("../actions/product");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield new product_1.ProductActions().getAll({}, req.query);
        return formatResponse({
            data: products,
            status: 200,
            message: 'Products retrieved successfully.',
            res,
        });
    }
    catch (error) {
        console.log(error);
        return formatResponse({
            status: 500,
            message: 'Internal Server Error',
            res,
        });
    }
});
exports.getAll = getAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield new product_1.ProductActions().create(req.body);
        return formatResponse({
            data: product,
            status: 201,
            message: 'Product created successfully.',
            res,
        });
    }
    catch (error) {
        return formatResponse({
            status: 500,
            message: 'Internal Server Error',
            res,
        });
    }
});
exports.create = create;
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield new product_1.ProductActions().findOne({ _id: req.params.id });
        return formatResponse({
            data: product,
            status: 200,
            message: 'Product retrieved successfully.',
            res,
        });
    }
    catch (error) {
        return formatResponse({
            status: 500,
            message: 'Internal Server Error',
            res,
        });
    }
});
exports.findById = findById;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield new product_1.ProductActions().updateOne({ _id: req.params.id }, req.body);
        return formatResponse({
            data: product,
            status: 200,
            message: 'Product updated successfully.',
            res,
        });
    }
    catch (error) {
        return formatResponse({
            status: 500,
            message: 'Internal Server Error',
            res,
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new product_1.ProductActions().deleteOne({ _id: req.params.id });
        return formatResponse({
            status: 200,
            message: 'Product deleted successfully.',
            res,
        });
    }
    catch (error) {
        return formatResponse({
            status: 500,
            message: 'Internal Server Error',
            res,
        });
    }
});
exports.remove = remove;
const formatResponse = (payload) => {
    const { data, status, message } = payload;
    return payload.res.status(payload.status).json({
        status,
        message,
        data,
    });
};
//# sourceMappingURL=product.js.map