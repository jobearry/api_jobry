import { Router, Request, Response } from "express";
import { getUsers } from "../controllers/users.controller";

export const userRouter = Router()
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       username:
 *                         type: string
 *                       email:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       is_active:
 *                         type: boolean
 *                       role:
 *                         type: string
 *       500:
 *         description: Internal server error
 */
userRouter.get('/users', getUsers)