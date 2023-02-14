"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const AppConfig = () => ({
    app: {
        environment: process.env.APP_ENV,
        port: parseInt(process.env.PORT, 10) || 3000,
        database: {
            uri: process.env.MONGO_URI,
        },
    },
});
exports.AppConfig = AppConfig;
//# sourceMappingURL=config.js.map