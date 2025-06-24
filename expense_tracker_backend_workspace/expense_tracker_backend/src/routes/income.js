const express = require('express');
const incomeController = require('../controllers/income');
const { auth } = require('../middleware');

const router = express.Router();

router.post('/', auth, incomeController.addIncome);
router.get('/', auth, incomeController.getIncomes);

module.exports = router;
