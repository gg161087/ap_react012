import './Footer.css';

export const Footer = () => {
    return (        
        <footer className="footer">
            <div className="container">
                <nav className="navbar container">
                    <ul className="navbar__item">
                        <li className="navbar__item">
                            <a className="navbar__link" href="/">CONTACTO</a>
                        </li>
                    </ul>
                    <picture>
                        <img className='navbar__logo' src="/ecommerce.png" alt="Logotipo de ecommerce"/>    
                    </picture>
                </nav>
                <p className="footer__copy">All rights reserved 2023 - UNIDAD3 - React012 of Gonzalo Gonzalez &copy;</p>      
            </div>
        </footer>
    )
}