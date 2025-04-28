import express, { Application } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { isDevelopment, PORT, swaggerOpts } from "./swagger/swaggerOptions";
import { userRouter } from './routes/user.route'
import dotenv from 'dotenv';

dotenv.config()
const server: Application = express()

//middleware
server.use(express.json())

//setup
const swaggerSpec = swaggerJsdoc(swaggerOpts);
server.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use('/', userRouter)

// if(isDevelopment){
// }
server.listen(PORT, () => {
  console.log(`Server is running at ${swaggerOpts.definition?.servers?.[0]?.url || 'undefined'}`);
  console.log(`Swagger docs available at ${swaggerOpts.definition?.servers?.[0]?.url || 'undefined'}/api`);

  // console.log("🚀 ~ swaggerSpec:", JSON.stringify(swaggerSpec, null, 2))
})
  
export default server
