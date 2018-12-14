import React from 'react';
import Styles from './header.module.sass'
import Menu from 'components/atoms/Menu'
import SubTitle from 'components/atoms/SubTitle'
import Subscribe from 'components/atoms/Subscribe'

const Header = () => {
    return (
        <header className={Styles.Header}>
            <Menu />
            <section>
                <h1 className={Styles.Title}>Journaling Together</h1>
                <SubTitle />
            </section>
            <Subscribe />
        </header>
    )
}
export default Header;
