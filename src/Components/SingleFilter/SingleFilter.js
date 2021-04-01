import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleFilter.module.css';


const SingleFilter = ({value}) => {
    return (
        <div className={styles.availableSize} >
            <label className={styles.label} >
                <input className={styles.input} type='checkbox' value={value} />
                <span className={styles.checkmark} >{value}</span>
            </label>
        </div>
    );
};

SingleFilter.propTypes = {
    value: PropTypes.string,
};

export default SingleFilter;