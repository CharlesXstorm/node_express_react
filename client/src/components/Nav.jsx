import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.brand}>Shoppings</div>
                <ul>
                    <li className={style.items}><Link to="/" className={style.link}>home</Link></li>
                    <li className={style.items}><Link to="/admin" className={style.link}>admin</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav