import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import '../../CSS/login.css';
import { redirect } from 'react-router-dom';

const LoginPopup = () => {

  //Definir campos
  const [nome, setNome] = useState('');
  const [nif, setNif] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tlm, setTlm] = useState('');

  //Se for true, mostra o formulário de registo caso contrario não mostra
  const [showRegister, setShowRegister] = useState(false);

  //Se for true é porque o utilizador está logado
  const [loggedIn, setLoggedIn] = useState(false);


  //Se for true, mostra o formulário de edição do perfil, e mostra os dados do perfil
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editProfileData, setEditProfileData] = useState(null);
  const [menuPopUp, setMenuPopUp] = useState(false);

  //Se for true, mostra o popup de edição do perfil
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);


  const handleLogin = async () => {
    try {
      console.log('A iniciar a função handleLogin'); // Mensagem na consola para verificar o inicio da função
  
      //Solicitação HTTP para o URL de login com o email fornecido
      const response = await fetch(`http://localhost:4000/login?email=${email}`);
  
      // Verifica se a resposta da solicitação foi bem sucedida
      if (!response.ok) {
        throw new Error('Erro ao fazer login'); // Manda um erro se a resposta não for bem sucedida
      }
  
      // Converte a resposta em formato JSON
      const data = await response.json();
      console.log('Dados de utilizador da DB:', data[0]); // Mostra os dados do utilizador na consola
  
      // Verifica se o email está na Base de dados
      if (data[0] === undefined) {
        console.log('Email não encontrado na DB:', email);
        alert('Email Inválido'); //Se não exibe uma mensagem de alerta
      } else {
        // Se sim extrai o email e a pass dos dados do utilizador
        let { Email, Pass } = data[0];
        console.log('Dados do utilizador:', Email, Pass);
  
        console.log('Email DB:', Email);
        console.log('Email inserido no formulário:', email);
  
        // Verifica se o email e a pass fornecidos correspondem aos dados do utilizador
        if (email === Email && password === Pass) {
          console.log('Email e senha coincidem');
          alert('Login Efetuado com Sucesso!'); //Se coincidirem mostra uma mensagem de alerta
          setLoggedIn(true); // Atualiza o estado LoggedIn para true(Botao de Bem-Vindo/Editar/Logout)
          localStorage.setItem('loggedIn', 'true'); //Guarda o estado "true" num armazenamento local
          localStorage.setItem('email', email); // Guarda o email no armazenamento local
        } else {
          console.log('Email e/ou senha incorretos');
          alert('Email e/ou senha incorretos'); //Mostra uma mensagem de Erro
          localStorage.setItem('loggedIn', 'false'); // Armazena o estado loggedIn como falso
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error); // Apanha e mostra qualquer erro que ocorra durante o processo
    }
  };

  //Função que permite o registo de funcionar
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
      console.log('Dados do usuário registados:', data);

    } catch (error) {
      console.error('Erro ao fazer registo:', error);
    }
  };

  //Permite submeter e verificar se o login é válido
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  //Permite mandar os dados do form para a base de dados
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  //Permite procurar o perfil do utilizador logado, e que as informações do perfil apareçam no formulário de edição
  const handleSearchProfile = async () => {
    try {
      const response = await fetch(`http://localhost:4000/editprofile/${email}`);
      if (!response.ok) {
        throw new Error('Erro ao obter dados do perfil para edição');
      }
      const userData = await response.json();
      console.log(userData); // Verifica os dados do perfil obtidos da API
      console.log(userData); // Verifica os dados do perfil obtidos da API
      setNome(userData.NomeCli); // Atribui o nome do usuário ao estado 'nome'
      setTlm(userData.Telemovel); // Atribui o telefone do usuário ao estado 'tlm'
      setNif(userData.Nif_Cli);
      setEditProfileData(userData);
      setEditProfileOpen(true);
    } catch (error) {
      console.error('Erro ao obter:', error);
    }
  };

  //Permite editar o perfil do utilizador logado
  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`http://localhost:4000/updateprofile/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nif: nif,
          NomeCli: nome,
          Telemovel: tlm
        })
      });

      if (!response.ok) {
        throw new Error('Erro na edição do perfil');
      }
      else {
        alert('Perfil editado com sucesso!');
        setPopupOpen(false);
      }

      const userData = await response.json();
      console.log(userData); // Verifica os dados do perfil obtidos da API

      setEditProfileData(userData);
      setEditProfileOpen(true);
    } catch (error) {
      console.error('Erro ao obter:', error);
    }
  };

  //Código do popup de edição do perfil
  const EditProfilePopUp = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      handleUpdateProfile();
    };

    return (
      <div>
        <button className="close-button" onClick={() => setPopupOpen(false)} >&times;</button>
        <div className="header">Editar Perfil</div>
        <br />
        <form onSubmit={handleSubmit}>
          <label className='label-login'>Nome:</label>
          <input className='input-login' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <label className='label-login'>Email:</label>
          <input className='input-login' type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
          <label className='label-login'>Telemóvel:</label>
          <input className='input-login' type="text" value={tlm} onChange={(e) => setTlm(e.target.value)} />
          <label className='label-login'>NIF:</label>
          <input className='input-login' type="number" value={nif} onChange={(e) => setNif(e.target.value)} />
          <button className="btnedit-save" type="submit">Salvar</button>
        </form>
      </div>
    );
  };

  const MenuPopUp = () => {


    return (
      <div className='ddlMenu'>
        <table>
          <tr>
            <button onClick={() => openPopup("editprofile")} className='buttonedit'>Editar Perfil</button>
          </tr>

          <tr>
            <button onClick={handleLogout} className='buttonlogout'>Logout</button>
          </tr>
        </table>
      </div>
    );
  };


  //Permite que o utilizador faça logout
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('email');
    window.location.reload();
  }

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  //Faz com que os dados do cliente estejam sempre atualizados no formulário de edição
  useEffect(() => {
    if (loggedIn && email) {
      handleSearchProfile();
    }
  }, [loggedIn, email]);

  //Faz com que o utilizador esteja sempre logado, mesmo que a página seja recarregada
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    const storedEmail = localStorage.getItem('email');
    if (loggedInStatus === 'true' && storedEmail) {
      setLoggedIn(true);
      setEmail(storedEmail);
    }
  }, []);

  //Permite abrir o popup de edição do perfil
  const openPopup = (popupType) => {
    setSelectedPopup(popupType);
    handleSearchProfile();
    setPopupOpen(true);
  };

  return (
    <Popup
      trigger={<button className={loggedIn ? 'logged-in' : 'login-button'}>{loggedIn ? `Bem-vindo ${nome}` : 'Login'}</button>}
      modal={!loggedIn}
      nested={loggedIn}
    >
      {(close) => (
        <div>
          {loggedIn ? (
            <MenuPopUp className='ddlMenu' />
          ) : (
            <div className='login-geral'>
              <div className="modal">
                <button className="close-button" onClick={close}>&times;</button>
                <div className="header">Login</div>
                <br />
                <div className="login-content" style={{ display: showRegister ? 'none' : 'block' }}>
                  <form onSubmit={handleSubmit}>
                    <label className='label-login'>Email:</label>
                    <input className='input-login' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='label-login'>Password:</label>
                    <input className='input-login' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginsubmit" type="submit">Login</button>
                    <button className="register-toggle" type="button" onClick={toggleRegister}>Sign Up</button>
                  </form>
                </div>
                <div className="register-content" style={{ display: showRegister ? 'block' : 'none' }}>
                  <form onSubmit={handleRegisterSubmit}>
                    <label className='label-login'>Nome:</label>
                    <input className='input-login' type="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label className='label-login'>Email:</label>
                    <input className='input-login' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='label-login'>Telemóvel:</label>
                    <input className='input-login' type="tlm" value={tlm} onChange={(e) => setTlm(e.target.value)} />
                    <label className='label-login'>NIF:</label>
                    <input className='input-login' type="number" value={nif} onChange={(e) => setNif(e.target.value)} />
                    <label className='label-login'>Password:</label>
                    <input className='input-login' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="register-toggle" type="button" onClick={toggleRegister}>Cancel</button>
                    <button className="register-submit" type="submit">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          )}
          <Popup
            open={popupOpen && selectedPopup === "editprofile"}
            onClose={() => setPopupOpen(false) && setEditProfileOpen(false)}
            closeOnEscape
            position="center center"
            contentStyle={{
              width: 'fit-content',
              height: 'fit-content'
              , padding: '20px',
              alignContent: 'center',
              display: 'block',
              justifyContent: 'center'
            }}
          >
            {EditProfilePopUp()}
          </Popup>
        </div>
      )}
    </Popup>
  );
};

export default LoginPopup;
