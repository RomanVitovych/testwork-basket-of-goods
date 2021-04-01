import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeaderEx.module.css';

const HeaderEx = ({ title }) => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {title && <h1 className={styles.header}>{title}</h1>}
            </div>
        </div>
    );
};

HeaderEx.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeaderEx;