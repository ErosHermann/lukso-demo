import Logo from '../assets/logo side.png';
import '../components/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Navbar() {

    const handleLogoClick = () => {
        window.location.reload();
      };

    

    return (
      <nav className="navbar">
        <div className="navbar-logo" onClick={handleLogoClick}>
        <img src={Logo} alt="Logo" />
        </div>
        

        <div className="connection">
        <button className="connect-wallet">Connect Wallet</button>
        </div>

      </nav>
    );
  }
  
  export default Navbar;