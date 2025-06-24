const express = require('express');
const analyticsController = require('../controllers/analytics');
const { auth } = require('../middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Data analytics
 */

/**
 * @swagger
 * /analytics:
 *   get:
 *     summary: Get income and expense analytics
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data for the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Analytics'
 */
router.get('/', auth, analyticsController.getAnalytics);

module.exports = router;
