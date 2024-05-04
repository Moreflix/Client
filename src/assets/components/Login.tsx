// LoginForm.tsx
import React from 'react';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white p-6 rounded shadow-lg w-64">
        {/* Aquí va tu formulario de inicio de sesión */}
      </div>
    </div>
  );
}

export default LoginForm;
