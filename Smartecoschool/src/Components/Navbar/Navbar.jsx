import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    const ToggleMenu = () => {
        mobileMenu? setMobileMenu(false): setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu? '': 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>Objetivos</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Funcionamiento</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Sobre Nosotros</Link></li>
                <li><Link to='footer' smooth={true} offset={0} duration={500}>Redes Sociales</Link></li>
                <li><a href="https://wiki.ieselrincon.es/index.php?title=SmartEcoSchool" target='_blank'><button className='btn'>Wiki</button></a></li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className='menu-icon' onClick={ToggleMenu} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </nav>
    )
}

export default Navbar