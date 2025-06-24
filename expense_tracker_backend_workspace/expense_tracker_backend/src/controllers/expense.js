const db = require('../services/db');
const Expense = require('../models/expense');

class ExpenseController {
  async addExpense(req, res, next) {
    try {
      const { amount, description, category, date } = req.body;
      const expenses = await db.expenses.get();
      const newExpense = new Expense(
        Date.now().toString(),
        req.user.id,
        amount,
        description,
        category,
        date
      );

      expenses.push(newExpense);
      await db.expenses.save(expenses);

      res.status(201).json(newExpense);
    } catch (error) {
      next(error);
    }
  }

  async getExpenses(req, res, next) {
    try {
      const expenses = await db.expenses.get();
      const userExpenses = expenses.filter(
        (expense) => expense.userId === req.user.id
      );
      res.json(userExpenses);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ExpenseController();
