import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomePage } from './pages/Home'
import { LinksPage } from './pages/Links'
import { LoginPage } from './pages/Login'
import { RegistrationPage } from './pages/Registration'

createRoot(document.getElementById('root')!).render(
  <RegistrationPage />
)
