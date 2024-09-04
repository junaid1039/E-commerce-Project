import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shopcontextprovider from './Context/Shopcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopcontextprovider>
    <App />
    </Shopcontextprovider>
  </StrictMode>,
)
