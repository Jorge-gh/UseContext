import React, { useContext } from 'react'
import { context } from '../context/OscuroContexto.jsx'

function Header() {
const {oscuro, setOscuro} = useContext(context)


  return (
    <header className='headHeader'>
        <nav>
            <img src={oscuro ? "/homeDark.png" : "/home.svg"} height={40} alt="" />
            <a href="/">Inicio</a>
            <a href="/pan">Pan</a>
            <a href="/login">Login</a>
            <button onClick={() => setOscuro(!oscuro)}>Cambiar modo</button>
        </nav>
    </header>
  )
}

export default Header