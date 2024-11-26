import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateLinkPage } from './pages/CreateLink'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LinksPage } from './pages/Links'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <CreateLinkPage /> } />
      <Route path='/createLink' element={ <CreateLinkPage /> } />
      <Route path='/links' element={ <LinksPage /> } />
    </Routes>
  </BrowserRouter>
)