"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createProductSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    description: joi_1.default.string().required(),
});
exports.productUpdateSchema = joi_1.default.object({
    name: joi_1.default.string(),
    price: joi_1.default.number(),
    description: joi_1.default.string(),
});
//# sourceMappingURL=product.js.map