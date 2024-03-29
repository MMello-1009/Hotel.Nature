import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../../CSS/login.css';

const LoginPopup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:4000/login?email=${email}`);

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      console.log('Dados do usuário:', data);
      // Aqui você pode adicionar lógica para tra
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`http://localhost:4000/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password,})
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer registro');
      }

      const data = await response.json();
      console.log('Dados do usuário registrado:', data);
      // Aqui você pode adicionar lógica após o registro
    } catch (error) {
      console.error('Erro ao fazer registro:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <Popup trigger={<button className="login-button">Login</button>} modal nested>
      {(close) => (
        <div className='login-geral'>
          <div className="modal">
            <button className="close-button" onClick={close}>
              &times;
            </button>
            <div className="header">Login</div>
            <br />
            <div className="login-content" style={{ display: showRegister ? 'none' : 'block' }}>
              <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-submit" type="submit">
                  Login
                </button>
                <button className="register-toggle" onClick={toggleRegister}>
                  Sign Up
                </button>
              </form>
            </div>

            <div className="register-content" style={{ display: showRegister ? 'block' : 'none' }}>
              <form onSubmit={handleRegisterSubmit}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="register-toggle" onClick={toggleRegister}>
                  Cancel
                </button>
                <button className="register-submit" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default LoginPopup;