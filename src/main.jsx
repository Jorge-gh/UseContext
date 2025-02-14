import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import InfoContext from './context/InfoContext.jsx'
import OscuroContexto from './context/OscuroContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoContext>
      <OscuroContexto>
        <App />
      </OscuroContexto>
    </InfoContext>
  </StrictMode>,
)
