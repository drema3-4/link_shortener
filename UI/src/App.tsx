import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateLinkPage } from './pages/CreateLink'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LinksPage } from './pages/Links'
import AuthenticationContext from './auth/AuthenticationContext'
import { useState, useEffect } from 'react'
import { claim } from './auth/auth.models'
import { getClaims } from './auth/handleJWT'

createRoot(document.getElementById('root')!).render(
  <App/>
)

function App(){
  configureValidations();
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims())
  }, [])

  function isAdmin(){
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }

  return(
    <BrowserRouter>
  <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
    <Routes>
      <Route path='/' element={ <CreateLinkPage /> } />
      <Route path='/createLink' element={ <CreateLinkPage /> } />
      <Route path='/links' element={ <LinksPage /> } />
    </Routes>
    </AuthenticationContext.Provider>
  </BrowserRouter>
  )
}

function configureValidations() {
  throw new Error('Function not implemented.')
}
