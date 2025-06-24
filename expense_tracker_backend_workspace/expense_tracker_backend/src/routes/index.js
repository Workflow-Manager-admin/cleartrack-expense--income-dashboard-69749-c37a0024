const express = require('express');
const healthController = require('../controllers/health');
const authRoutes = require('./auth');
const incomeRoutes = require('./income');
const expenseRoutes = require('./expense');
const analyticsRoutes = require('./analytics');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));
router.use('/auth', authRoutes);
router.use('/incomes', incomeRoutes);
router.use('/expenses', expenseRoutes);
router.use('/analytics', analyticsRoutes);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         username:
 *           type: string
 *     Expense:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *         amount:
 *           type: number
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     Income:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *         amount:
 *           type: number
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *     Analytics:
 *       type: object
 *       properties:
 *         totalIncome:
 *           type: number
 *         totalExpenses:
 *           type: number
 *         balance:
 *           type: number
 *         expensesByCategory:
 *           type: object
 *           additionalProperties:
 *             type: number
 */

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Health check
 */
module.exports = router;
