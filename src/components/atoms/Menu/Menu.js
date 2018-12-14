import React from 'react';
import Styles from './menu.module.sass'

const Menu = () => {
    return (
        <nav className={Styles.Nav}>
            <ul className={Styles.NavUl}>
                <li className={Styles.NavLi}>HOME</li>
                <li className={Styles.NavLi}>THE AUTOR</li>
                <li className={Styles.NavLi}>NEWS</li>
                <li className={Styles.NavLi}>SHOP</li>
                <li className={Styles.NavLi}>CONTACT</li>
            </ul>
        </nav>
    )
}
export default Menu;
