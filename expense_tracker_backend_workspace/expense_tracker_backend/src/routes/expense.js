const express = require('express');
const expenseController = require('../controllers/expense');
const { auth } = require('../middleware');

const router = express.Router();

router.post('/', auth, expenseController.addExpense);
router.get('/', auth, expenseController.getExpenses);

module.exports = router;
