import React from 'react';

import HeaderEx from '../HeaderEx/HeaderEx';

import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.mainWrap}>
            <HeaderEx title='Our t-shirt store' />
            <hr className={styles.horizontalLine} />
        </header>
    );
};

export default Header;