import './Header.css'

import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <Link className='logo' to="/">StarMovie</Link>
        <Link className='favoritos' to="/favoritos">Meus Filmes</Link>
    </header>
  )
}