"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOpts = exports.PORT = void 0;
exports.PORT = 3000;
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
                url: process.env.BASE_URL || `http://localhost:${exports.PORT}`,
            }
        ]
    },
    apis: ['./src/routes/*.ts']
};
