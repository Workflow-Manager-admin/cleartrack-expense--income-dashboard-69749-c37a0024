const db = require('../services/db');

class AnalyticsController {
  async getAnalytics(req, res, next) {
    try {
      const { id: userId } = req.user;

      const incomes = await db.incomes.get();
      const expenses = await db.expenses.get();

      const userIncomes = incomes.filter((income) => income.userId === userId);
      const userExpenses = expenses.filter(
        (expense) => expense.userId === userId
      );

      const totalIncome = userIncomes.reduce(
        (acc, income) => acc + income.amount,
        0
      );
      const totalExpenses = userExpenses.reduce(
        (acc, expense) => acc + expense.amount,
        0
      );

      const expensesByCategory = userExpenses.reduce((acc, expense) => {
        const { category, amount } = expense;
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += amount;
        return acc;
      }, {});

      res.json({
        totalIncome,
        totalExpenses,
        balance: totalIncome - totalExpenses,
        expensesByCategory,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AnalyticsController();
