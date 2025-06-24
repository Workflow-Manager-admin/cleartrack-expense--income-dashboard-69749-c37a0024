import React from 'react';
import { IncomeForm } from './IncomeForm';
import api from '../../services/api';
import { Income } from '../../types';

interface EditIncomeProps {
  income: Income;
  onIncomeUpdated: (income: Income) => void;
}

export const EditIncome: React.FC<EditIncomeProps> = ({ income, onIncomeUpdated }) => {
  const handleSubmit = async (updatedIncome: Omit<Income, '_id'>) => {
    try {
      const { data } = await api.put(`/incomes/${income._id}`, updatedIncome);
      onIncomeUpdated(data);
    } catch (error) {
      console.error('Failed to update income', error);
    }
  };

  return (
    <div>
      <h2>Edit Income</h2>
      <IncomeForm income={income} onSubmit={handleSubmit} />
    </div>
  );
};
