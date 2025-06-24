const db = require('../services/db');
const Income = require('../models/income');

class IncomeController {
  async addIncome(req, res, next) {
    try {
      const { amount, description, category, date } = req.body;
      const incomes = await db.incomes.get();
      const newIncome = new Income(
        Date.now().toString(),
        req.user.id,
        amount,
        description,
        category,
        date
      );

      incomes.push(newIncome);
      await db.incomes.save(incomes);

      res.status(201).json(newIncome);
    } catch (error) {
      next(error);
    }
  }

  async getIncomes(req, res, next) {
    try {
      const incomes = await db.incomes.get();
      const userIncomes = incomes.filter(
        (income) => income.userId === req.user.id
      );
      res.json(userIncomes);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new IncomeController();
