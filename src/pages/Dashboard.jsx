import React, { useContext } from 'react'
import { contextInfo } from '../context/InfoContext'

function Dashboard() {
  
  const {info} = useContext(contextInfo)

  if (info == null) return <main className='pages-dashboard'>
    <p>usuario no encontrado</p>
  </main>

  return (
    <main>
      <span>Username: {info.username}</span>
      <span>Password: {info.password}</span>
    </main>
  )
}

export default Dashboard