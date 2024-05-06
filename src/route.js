import {BrowserRouter, Routes, Route}  from 'react-router-dom'

import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import Favoritos from './pages/Favoritos/Favoritos'
import Erro from './pages/Erro/Erro'


import Header from './components/Header/Header'

export default function RoutesApp() {
    return (
      <BrowserRouter>
      <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/filme/:id' element={<Movies/>}/>
              <Route path='/favoritos' element={<Favoritos/>} />
              <Route path='*' element={<Erro />}/>
          </Routes>
      </BrowserRouter>
    )
}