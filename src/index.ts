import express, { Application } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { isDevelopment, PORT, swaggerOpts } from "./swagger/swaggerOptions";
import { userRouter } from './routes/user.route'
import dotenv from 'dotenv';
import cors from 'cors';
import {sql} from "./config/db.connect";

dotenv.config()
const server: Application = express()

//middleware
server.use(express.json())
server.use(cors())

//setup
const swaggerSpec = swaggerJsdoc(swaggerOpts);
server.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use('/', userRouter)

async function initDB() {
  try{
    await sql`
      CREATE TABLE IF NOT EXISTS jdb_users(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username TEXT NOT NULL,
        password VARCHAR NOT NULL,
        email TEXT NOT NULL,
        phone TEXT UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN NOT NULL DEFAULT false,
        role TEXT NOT NULL DEFAULT 'USER'
      )
    `
    // console.log(sql)
  }catch(error){
    console.log("Error init of DB", error)
  }
}

initDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running at ${swaggerOpts.definition?.servers?.[0]?.url || 'undefined'}`);
    console.log(`Swagger docs available at ${swaggerOpts.definition?.servers?.[0]?.url || 'undefined'}/api`);
  
    // console.log("🚀 ~ swaggerSpec:", JSON.stringify(swaggerSpec, null, 2))
    // console.log('Environment Variables:', process.env);
  })
})

