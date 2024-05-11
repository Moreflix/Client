// LoginForm.tsx
import React from 'react';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black opacity-50 flex items-center justify-center" onClick={onClose}>
      <div className=" min-w-80 max-h-90 p-6 bg-white rounded-lg shadow-lg z-30" onClick={stopPropagation}>
        <div className="flex justify-center mb-8">
          <img src="src/assets/img/logo.png" alt="Logo" className="w-30 h-20" />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Log In</h1>
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            <a href="#" className="block text-right text-xs text-cyan-600 mt-2">Forgot password?</a>
          </div>
          <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
        </form>
        <div className="text-center">
          <p className="text-sm">¿No tienes una cuenta? <a href="#" className="text-cyan-600">Sign now!</a></p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-10">&copy; 2024 Moreflix</p>
      </div>
    </div>
  );
}

export default LoginForm;
