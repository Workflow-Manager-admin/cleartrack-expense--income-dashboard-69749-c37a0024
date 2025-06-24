import React from 'react';
import { Income } from '../../types';
import { editButtonStyles, deleteButtonStyles } from '../../styles';

interface IncomeListProps {
  incomes: Income[];
  onEdit: (income: Income) => void;
  onDelete: (id: string) => void;
}

export const IncomeList: React.FC<IncomeListProps> = ({ incomes, onEdit, onDelete }) => {
  return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {incomes.map((income) => (
        <div
          key={income._id}
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
            <span style={{ fontWeight: 'bold' }}>{income.title}</span>
            <span style={{ marginLeft: '10px', color: '#aaa' }}>
              {income.category}
            </span>
          </div>
          <div>
            <span>${income.amount.toFixed(2)}</span>
            <button onClick={() => onEdit(income)} style={editButtonStyles}>
              Edit
            </button>
            <button
              onClick={() => onDelete(income._id)}
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
