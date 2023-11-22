import {BrowserRouter,NavLink, Routes, Route} from 'react-router-dom';

import {HomePaises} from './pages/HomePaises.jsx';
import {HomeRicky} from './pages/HomeRicky.jsx';

export const App = () => {    

    return (
        <>
            <BrowserRouter>
                <header>
                    <nav>
                        <h2>LOGO</h2>
                        <NavLink to='/'>Home Ricky</NavLink>
                        <NavLink to='/paises'>Home Paises</NavLink>
                    </nav>
                </header>
                <Routes>
                    <Route index element={<HomeRicky></HomeRicky>}></Route>
                    <Route path='paises' element={<HomePaises></HomePaises>}></Route>
                </Routes>
            </BrowserRouter>           
        </>
    )
}