import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState('es');
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelected(lng);
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ToggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>{t('navbar.home')}</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>{t('navbar.objectives')}</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>{t('navbar.functioning')}</Link></li>
                <li><Link to='about-container' smooth={true} offset={-260} duration={500}>{t('navbar.aboutUs')}</Link></li>
                <li><Link to='footer' smooth={true} offset={0} duration={500}>{t('navbar.socialMedia')}</Link></li>
                <li><a href="https://wiki.ieselrincon.es/index.php?title=SmartEcoSchool" target='_blank' rel="noopener noreferrer">
                    <button className='btn'>{t('navbar.wiki')}</button>
                </a></li>
            </ul>
            
            {/* Botones de idioma */}
            <div className={mobileMenu ? 'show-lang-buttons' : 'hide-lang-buttons'}>
                <button onClick={() => changeLanguage('en')} className={`btn-lang ${selected === 'en' ? 'en' : ''}`}>En</button>
                <button onClick={() => changeLanguage('es')} className={`btn-lang ${selected === 'es' ? 'es' : ''}`}>Es</button>
            </div>

            {/* Ícono del menú */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className='menu-icon' onClick={ToggleMenu} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </nav>
    );
};

export default Navbar;