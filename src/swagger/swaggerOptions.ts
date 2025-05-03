import swaggerJsdoc from 'swagger-jsdoc';

export const PORT = process.env.PORT || 3000;
export const isDevelopment = process.env.NODE_ENV === 'development';
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
        url: isDevelopment?`http://localhost:${PORT}`: process.env.BASE_URL || `http://localhost:${PORT}`
      }
    ]
  },
  apis: isDevelopment? ['./src/controllers/*.ts', './src/routes/*.ts']:['./dist/controllers/*.js', './dist/routes/*.js'],
}
