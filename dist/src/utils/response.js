"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationErrors = exports.formatResponse = void 0;
const formatResponse = (payload) => {
    const { data, status, message } = payload;
    return payload.res.status(payload.status).json({
        status,
        message,
        data,
    });
};
exports.formatResponse = formatResponse;
const formatValidationErrors = (payload) => {
    const { data, status, message, errors } = payload;
    return payload.res.status(payload.status).json({
        status,
        message,
        data,
        errors
    });
};
exports.formatValidationErrors = formatValidationErrors;
//# sourceMappingURL=response.js.map