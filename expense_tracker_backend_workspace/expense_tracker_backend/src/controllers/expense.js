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

  async updateExpense(req, res, next) {
    try {
      const { id } = req.params;
      const { amount, description, category, date } = req.body;
      const expenses = await db.expenses.get();
      const expenseIndex = expenses.findIndex(
        (expense) => expense.id === id && expense.userId === req.user.id
      );

      if (expenseIndex === -1) {
        return res.status(404).json({ message: 'Expense not found' });
      }

      const updatedExpense = {
        ...expenses[expenseIndex],
        amount: amount ?? expenses[expenseIndex].amount,
        description: description ?? expenses[expenseIndex].description,
        category: category ?? expenses[expenseIndex].category,
        date: date ?? expenses[expenseIndex].date,
      };

      expenses[expenseIndex] = updatedExpense;
      await db.expenses.save(expenses);

      res.json(updatedExpense);
    } catch (error) {
      next(error);
    }
  }

  async deleteExpense(req, res, next) {
    try {
      const { id } = req.params;
      const expenses = await db.expenses.get();
      const originalLength = expenses.length;
      const filteredExpenses = expenses.filter(
        (expense) => !(expense.id === id && expense.userId === req.user.id)
      );

      if (originalLength === filteredExpenses.length) {
        return res.status(404).json({ message: 'Expense not found' });
      }

      await db.expenses.save(filteredExpenses);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ExpenseController();
