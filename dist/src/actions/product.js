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
exports.ProductActions = void 0;
const product_1 = require("../models/product");
const paginate_1 = require("../utils/paginate");
class ProductActions {
    getAll(filter, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, paginate_1.paginate)(product_1.Product.find(filter), query);
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.create(product);
        });
    }
    findOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.findOne(filter);
        });
    }
    updateOne(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.findOneAndUpdate(filter, update, { new: true });
        });
    }
    deleteOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.findOneAndDelete(filter);
        });
    }
}
exports.ProductActions = ProductActions;
//# sourceMappingURL=product.js.map