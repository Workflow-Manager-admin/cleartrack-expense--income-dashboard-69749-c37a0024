export const inputStyles: React.CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #444',
  backgroundColor: '#333',
  color: 'white',
  fontSize: '16px',
};

export const buttonStyles: React.CSSProperties = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#1976d2',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
};

export const editButtonStyles: React.CSSProperties = {
  ...buttonStyles,
  backgroundColor: '#ffca28',
  marginLeft: '10px',
};

export const deleteButtonStyles: React.CSSProperties = {
  ...buttonStyles,
  backgroundColor: '#f44336',
  marginLeft: '10px',
};
