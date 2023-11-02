import Logo from '../assets/logo.svg';
import '../sass/modules/header.scss';
import Navbar from './Navbar';

function Header(){
    return(
        <header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
    )
}

export default Header;