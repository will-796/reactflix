import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="Logo">
                <img className="Logo" src={Logo} alt="Willflix logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;
