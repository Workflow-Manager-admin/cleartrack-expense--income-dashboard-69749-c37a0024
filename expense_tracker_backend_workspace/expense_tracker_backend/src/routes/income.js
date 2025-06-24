const express = require('express');
const incomeController = require('../controllers/income');
const { auth } = require('../middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Incomes
 *   description: Income management
 */

/**
 * @swagger
 * /incomes:
 *   post:
 *     summary: Add a new income
 *     tags: [Incomes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - description
 *               - category
 *               - date
 *             properties:
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Income created successfully
 *   get:
 *     summary: Get all incomes for the user
 *     tags: [Incomes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of incomes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Income'
 */
router.post('/', auth, incomeController.addIncome);
router.get('/', auth, incomeController.getIncomes);

module.exports = router;
