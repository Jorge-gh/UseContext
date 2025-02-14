import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { contextInfo } from '../context/InfoContext';

function Login() {
  const {loginUser} = useContext(contextInfo)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()

  function loginSubmit(event) {
    event.preventDefault();
    loginUser(username,password)
    navigate("/dashboard")
  }

  return (
    <main className='pages-login'>
      <form onSubmit={loginSubmit}>
        <h1>Inicio de sesion</h1>
        <input type="text" placeholder='Nombre de usuario' onChange={e => setUsername(e.target.value)} value={username}/>
        <input type="password" placeholder='Contraseña' onChange={e => setPassword(e.target.value)} value={password}/>
        <button type='submit'>Iniciar sesion</button>
      </form>
    </main>
  )
}

export default Login