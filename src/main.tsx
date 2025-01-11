import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
=======
import './style/index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
>>>>>>> 0a4fb88ca5820edea1e388fd6e1b493604e3a689
  </StrictMode>,
)
