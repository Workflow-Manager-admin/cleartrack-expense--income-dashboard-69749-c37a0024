import React from 'react';
import { IncomeForm } from './IncomeForm';
import api from '../../services/api';
import { Income } from '../../types';

interface AddIncomeProps {
  onIncomeAdded: (income: Income) => void;
}

export const AddIncome: React.FC<AddIncomeProps> = ({ onIncomeAdded }) => {
  const handleSubmit = async (income: Omit<Income, '_id'>) => {
    try {
      const { data } = await api.post('/incomes', income);
      onIncomeAdded(data);
    } catch (error) {
      console.error('Failed to add income', error);
    }
  };

  return (
    <div>
      <h2>Add Income</h2>
      <IncomeForm onSubmit={handleSubmit} />
    </div>
  );
};
