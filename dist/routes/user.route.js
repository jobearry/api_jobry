"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
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
exports.userRouter.get('/api/hello', (req, res) => {
    res.json({ message: "gello" });
});
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
exports.userRouter.get('/api/test', (req, res) => {
    res.json({ message: "gello" });
});
