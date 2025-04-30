import { Router, Request, Response } from "express";

export const userRouter = Router()

/**
 * @openapi
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: gello
 */
userRouter.get('/hello', (req: Request, res: Response) => {
  res.json({message:"gello"})
})

/**
 * @openapi
 * /test:
 *   get:
 *     summary: Returns a greeting
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: gello
 */
userRouter.get('/test', (req: Request, res: Response) => {
  res.json({message:"gello"})
})