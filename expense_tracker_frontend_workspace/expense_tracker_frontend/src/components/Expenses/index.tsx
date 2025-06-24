import React, { useState, useEffect } from 'react';
import { Expense as ExpenseType } from '../../types';
import api from '../../services/api';
import { AddExpense } from './AddExpense';
import { EditExpense } from './EditExpense';
import { ExpenseList } from './ExpenseList';

export const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [editingExpense, setEditingExpense] = useState<ExpenseType | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const { data } = await api.get('/expenses');
        setExpenses(data);
      } catch (error) {
        console.error('Failed to fetch expenses', error);
      }
    };
    fetchExpenses();
  }, []);

  const handleExpenseAdded = (expense: ExpenseType) => {
    setExpenses([...expenses, expense]);
  };

  const handleExpenseUpdated = (updatedExpense: ExpenseType) => {
    setExpenses(
      expenses.map((expense) =>
        expense._id === updatedExpense._id ? updatedExpense : expense
      )
    );
    setEditingExpense(null);
  };

  const handleDeleteExpense = async (id: string) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error('Failed to delete expense', error);
    }
  };

  return (
    <div>
      {editingExpense ? (
        <EditExpense
          expense={editingExpense}
          onExpenseUpdated={handleExpenseUpdated}
        />
      ) : (
        <AddExpense onExpenseAdded={handleExpenseAdded} />
      )}
      <ExpenseList
        expenses={expenses}
        onEdit={setEditingExpense}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
};
