import React from 'react';
import { ExpenseForm } from './ExpenseForm';
import api from '../../services/api';
import { Expense } from '../../types';

interface EditExpenseProps {
  expense: Expense;
  onExpenseUpdated: (expense: Expense) => void;
}

export const EditExpense: React.FC<EditExpenseProps> = ({ expense, onExpenseUpdated }) => {
  const handleSubmit = async (updatedExpense: Omit<Expense, '_id'>) => {
    try {
      const { data } = await api.put(`/expenses/${expense._id}`, updatedExpense);
      onExpenseUpdated(data);
    } catch (error) {
      console.error('Failed to update expense', error);
    }
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <ExpenseForm expense={expense} onSubmit={handleSubmit} />
    </div>
  );
};
