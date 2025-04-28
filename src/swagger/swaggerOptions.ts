import swaggerJsdoc from 'swagger-jsdoc';

export const PORT = 3000;
export const swaggerOpts: swaggerJsdoc.Options = {
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
      description: 'A simple Express API documented with Swagger'
    },

    servers: [
      {
        url: process.env.BASE_URL || `http://localhost:${PORT}`,
      }
    ]
  },
  apis: ['./src/routes/*.ts']
}
