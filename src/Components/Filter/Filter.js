import React from 'react';

import SingleFilter from '../SingleFilter/SingleFilter';

import sizes from '../../db/sizes.json';
import styles from './Filter.module.css';

const Filter = () => {
    return (
        <div className={styles.container} >
            <div className={styles.filter} >
                <h4 className={styles.title} >Size:</h4>
                    {sizes.map(size =>
                    <SingleFilter key={size} value={size} />
            )}
            </div>
        </div>
    );
};

export default Filter;