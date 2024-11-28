import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthenticationContext from './auth/AuthenticationContext'
import { useState, useEffect } from 'react'
import { claim } from './auth/auth.models'
import { getClaims } from './auth/handleJWT'
import configureInterceptor from './util/httpInterceptors'
import routes from './routes'


createRoot(document.getElementById('root')!).render(
  <App/>
)

function App() {
    configureInterceptor();
    const [claims, setClaims] = useState<claim[]>([]);

    useEffect(() => {
        setClaims(getClaims())
    }, [])

    // function isAdmin(){
    //     return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
    // }

    return(
        <BrowserRouter>
            <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
                {/* <NavigateComponent></NavigateComponent> */}
                <Routes>
                    { routes.map( i => <Route path={i.path} element = {<i.element/>} />) }
                    {/* <Route path='/' element={ <CreateLinkPage /> } />
                    <Route path='/createLink' element={ <CreateLinkPage /> } />
                    <Route path='/links' element={ <LinksPage /> } /> */}
                </Routes>
            </AuthenticationContext.Provider>
        </BrowserRouter>
    )
}

