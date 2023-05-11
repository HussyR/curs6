import { Link } from 'react-router-dom';
import logo from './../9999.png';
function Header() {
    return (
        <div className="Header">
            <header className="header_container">
            <div className="logo_container">
                <img src={logo}/>
            </div>
            <nav class="navigation">
                <div class="menu_button button"><Link to="/menu">Меню</Link></div>
                <div class="about_button button"><Link to="/reviews">Отзывы</Link></div>
                <div class="about_button button"><Link to="/about">О нас</Link></div>
            </nav>
            </header>
        </div>
    );
}

export default Header;