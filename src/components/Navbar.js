import { Link, useLocation } from 'react-router-dom';
import '../sass/modules/navbar.scss'

function Navbar() {
    // utilisation du hook pour obtenir l'url actuel
    const location = useLocation();
  
    return (
      <nav className='nav'>
        <ul className='nav_list'>
          <li className={location.pathname === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
            <Link to='/'>
              Accueil
            </Link>
          </li>
          <li className={location.pathname === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
            <Link to='/about'>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;