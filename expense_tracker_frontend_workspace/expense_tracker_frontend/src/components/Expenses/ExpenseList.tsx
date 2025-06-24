import React from 'react';
import { Expense } from '../../types';
import { editButtonStyles, deleteButtonStyles } from '../../styles';

interface ExpenseListProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onEdit, onDelete }) => {
  return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {expenses.map((expense) => (
        <div
          key={expense._id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#222',
            borderRadius: '5px',
          }}
        >
          <div>
            <span style={{ fontWeight: 'bold' }}>{expense.title}</span>
            <span style={{ marginLeft: '10px', color: '#aaa' }}>
              {expense.category}
            </span>
          </div>
          <div>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={() => onEdit(expense)} style={editButtonStyles}>
              Edit
            </button>
            <button
              onClick={() => onDelete(expense._id)}
              style={deleteButtonStyles}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
