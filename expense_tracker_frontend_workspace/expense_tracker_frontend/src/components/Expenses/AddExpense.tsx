import React from 'react';
import { ExpenseForm } from './ExpenseForm';
import api from '../../services/api';
import { Expense } from '../../types';

interface AddExpenseProps {
  onExpenseAdded: (expense: Expense) => void;
}

export const AddExpense: React.FC<AddExpenseProps> = ({ onExpenseAdded }) => {
  const handleSubmit = async (expense: Omit<Expense, '_id'>) => {
    try {
      const { data } = await api.post('/expenses', expense);
      onExpenseAdded(data);
    } catch (error) {
      console.error('Failed to add expense', error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};
