import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../../CSS/login.css';

const LoginPopup = () => {
  const [nome, setNome] = useState('');
  const [nif, setNif] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tlm, setTlm] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:4000/login?email=${email}`);

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();
      if (data[0] === undefined) {
        alert('Email Inválido');
      }
      else {
        let { Email, Pass } = data[0];
        console.log('Dados do usuário:', Email, Pass);

        if (email == Email && password == Pass) {
          alert('Login Efetuado com Sucesso!');
        }else {
          alert('Password Inválida!');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleRegister = async () => {
    try {
      console.log(nome, email, nif, tlm, password)
      const response = await fetch(`http://localhost:4000/register?Email=${email}&Pass=${password}&nif=${nif}&NomeCli=${nome}&Telemovel=${tlm}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Erro ao fazer registo');
      }

      const data = await response.json();
      console.log('Dados do usuário registado:', data);

    } catch (error) {
      console.error('Erro ao fazer registo:', error);
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
                <label className='label-login'>Email:</label>
                <input className='input-login'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className='label-login'>Password:</label>
                <input className='input-login'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-submit" type="submit">
                  Login
                </button>
                <button className="register-toggle" type="button" onClick={toggleRegister}>
                  Sign Up
                </button>
              </form>
            </div>

            <div className="register-content" style={{ display: showRegister ? 'block' : 'none' }}>
              <form onSubmit={handleRegisterSubmit}>
              <label className='label-login'>Nome:</label>
                <input className='input-login'
                  type="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label className='label-login'>Email:</label>
                <input className='input-login'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className='label-login'>Telemóvel:</label>
                <input className='input-login'
                  type="tlm"
                  value={tlm}
                  onChange={(e) => setTlm(e.target.value)}
                />
                <label className='label-login'>NIF:</label>
                <input className='input-login'
                  type="number"
                  value={nif}
                  onChange={(e) => setNif(e.target.value)}
                />
                <label className='label-login'>Password:</label>
                <input className='input-login'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="register-toggle" type="button" onClick={toggleRegister}>
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