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

  async updateIncome(req, res, next) {
    try {
      const { id } = req.params;
      const { amount, description, category, date } = req.body;
      const incomes = await db.incomes.get();
      const incomeIndex = incomes.findIndex(
        (income) => income.id === id && income.userId === req.user.id
      );

      if (incomeIndex === -1) {
        return res.status(404).json({ message: 'Income not found' });
      }

      const updatedIncome = {
        ...incomes[incomeIndex],
        amount: amount ?? incomes[incomeIndex].amount,
        description: description ?? incomes[incomeIndex].description,
        category: category ?? incomes[incomeIndex].category,
        date: date ?? incomes[incomeIndex].date,
      };

      incomes[incomeIndex] = updatedIncome;
      await db.incomes.save(incomes);

      res.json(updatedIncome);
    } catch (error) {
      next(error);
    }
  }

  async deleteIncome(req, res, next) {
    try {
      const { id } = req.params;
      const incomes = await db.incomes.get();
      const originalLength = incomes.length;
      const filteredIncomes = incomes.filter(
        (income) => !(income.id === id && income.userId === req.user.id)
      );

      if (originalLength === filteredIncomes.length) {
        return res.status(404).json({ message: 'Income not found' });
      }

      await db.incomes.save(filteredIncomes);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new IncomeController();
