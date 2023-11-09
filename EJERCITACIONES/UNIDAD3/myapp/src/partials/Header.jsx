import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar container">
                    <picture className="navbar__logo">
                        <a href="/">
                            <img src="/ecommerce.png" alt="Logotipo de ecommerce"/>
                        </a>
                    </picture>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a className="navbar__link" href="/">CONTACTO</a>                    
                        </li>                                 
                    </ul>
                </nav>
            </div>
        </header>
    )
}