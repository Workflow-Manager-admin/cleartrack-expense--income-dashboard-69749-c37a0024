import React, { useState, useEffect } from 'react';
import { Income } from '../../types';
import { inputStyles, buttonStyles } from '../../styles';

interface IncomeFormProps {
  income?: Income;
  onSubmit: (income: Omit<Income, '_id'>) => void;
}

export const IncomeForm: React.FC<IncomeFormProps> = ({ income, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (income) {
      setTitle(income.title);
      setAmount(income.amount);
      setDate(new Date(income.date).toISOString().split('T')[0]);
      setCategory(income.category);
      setDescription(income.description);
    }
  }, [income]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, amount, date, category, description });
  };

  return (
        <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={inputStyles}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
        style={inputStyles}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={inputStyles}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={inputStyles}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ ...inputStyles, height: '100px' }}
      />
      <button type="submit" style={buttonStyles}>
        {income ? 'Update' : 'Add'} Income
      </button>
    </form>
  );
};
