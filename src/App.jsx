import { useContext } from 'react'
import './App.css'
import UseOscuro, { context } from './context/OscuroContexto.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Pan from './pages/Pan'
import Queso from './pages/Queso'


function App() {
  const { oscuro, setOscuro } = useContext(context)

  return (
    <main className={oscuro ? "dark" : ""}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route>
            <Route index element={<Pan />} />
            <Route path='queso' element={<Queso />}/>
          </Route>
           
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
