import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../../CSS/login.css';

const LoginPopup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <Popup trigger={<button className="login-button">Login</button>} modal nested>
            {(close) => (
                <div className='login-geral'>
                    <div className="modal" >
                        <button className="close-button" onClick={close}>
                            &times;
                        </button>
                        <div className="header">Login</div>
                        <br></br>
                        <div className="content">
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
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default LoginPopup;