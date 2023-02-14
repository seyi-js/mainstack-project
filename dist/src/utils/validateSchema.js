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
exports.validateRequest = void 0;
const response_1 = require("./response");
const validateRequest = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validateAsync(req.body, {
            abortEarly: false,
            recursive: true,
        });
    }
    catch (err) {
        const validationErrorHash = {};
        err.details.forEach((error) => {
            if (!validationErrorHash[error.path]) {
                validationErrorHash[error.path[0]] = [
                    error.message.replaceAll(`"`, ``),
                ];
            }
            else {
                validationErrorHash[error.path[0]].push(error.message);
            }
        });
        const validationErrors = Object.keys(validationErrorHash).map((key) => ({
            field: key,
            constraints: validationErrorHash[key],
        }));
        return (0, response_1.formatValidationErrors)({
            status: 400,
            message: 'Validation Error',
            res,
            errors: validationErrors,
        });
    }
    return next();
});
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateSchema.js.map