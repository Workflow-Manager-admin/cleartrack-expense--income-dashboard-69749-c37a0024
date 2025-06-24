import React, { useState, useEffect } from 'react';
import { Income as IncomeType } from '../../types';
import api from '../../services/api';
import { AddIncome } from './AddIncome';
import { EditIncome } from './EditIncome';
import { IncomeList } from './IncomeList';

export const Income: React.FC = () => {
  const [incomes, setIncomes] = useState<IncomeType[]>([]);
  const [editingIncome, setEditingIncome] = useState<IncomeType | null>(null);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const { data } = await api.get('/incomes');
        setIncomes(data);
      } catch (error) {
        console.error('Failed to fetch incomes', error);
      }
    };
    fetchIncomes();
  }, []);

  const handleIncomeAdded = (income: IncomeType) => {
    setIncomes([...incomes, income]);
  };

  const handleIncomeUpdated = (updatedIncome: IncomeType) => {
    setIncomes(
      incomes.map((income) =>
        income._id === updatedIncome._id ? updatedIncome : income
      )
    );
    setEditingIncome(null);
  };

  const handleDeleteIncome = async (id: string) => {
    try {
      await api.delete(`/incomes/${id}`);
      setIncomes(incomes.filter((income) => income._id !== id));
    } catch (error) {
      console.error('Failed to delete income', error);
    }
  };

  return (
    <div>
      {editingIncome ? (
        <EditIncome
          income={editingIncome}
          onIncomeUpdated={handleIncomeUpdated}
        />
      ) : (
        <AddIncome onIncomeAdded={handleIncomeAdded} />
      )}
      <IncomeList
        incomes={incomes}
        onEdit={setEditingIncome}
        onDelete={handleDeleteIncome}
      />
    </div>
  );
};
