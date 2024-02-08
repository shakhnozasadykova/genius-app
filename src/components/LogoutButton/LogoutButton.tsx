import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
  buttonLabel: string;
  
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ buttonLabel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
    localStorage.clear(); 
    window.location.reload(); 
  };

  return (
    <button onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};


