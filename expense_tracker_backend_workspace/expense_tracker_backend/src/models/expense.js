class Expense {
  constructor(id, userId, amount, description, category, date) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.description = description;
    this.category = category;
    this.date = date;
  }
}

module.exports = Expense;
