import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleFilter.module.css';


const SingleFilter = ({ value, chooseSize }) => {
    return (
        <li className={styles.availableSize} >
            <label className={styles.label} >
                <input
                    className={styles.input}
                    type='checkbox'
                    value={value}
                    onClick={()=>chooseSize(value)}
                />
                <span className={styles.checkmark} >{value}</span>
            </label>
        </li>
    );
};

SingleFilter.propTypes = {
    value: PropTypes.string.isRequired,
    chooseSize: PropTypes.func.isRequired,
};

export default SingleFilter;