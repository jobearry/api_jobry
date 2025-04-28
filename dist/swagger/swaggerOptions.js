"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOpts = exports.isDevelopment = exports.PORT = void 0;
exports.PORT = 3000;
exports.isDevelopment = process.env.NODE_ENV === 'development';
exports.swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API',
            version: '1.0.0',
            description: 'A simple Express API documented with Swagger'
        },
        servers: [
            {
                url: exports.isDevelopment ? `http://localhost:${exports.PORT}` : process.env.BASE_URL
            }
        ]
    },
    apis: ['./src/routes/*.ts']
};
