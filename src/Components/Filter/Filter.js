import React from 'react';

import SingleFilter from '../SingleFilter/SingleFilter';

import styles from './Filter.module.css';


const Filter = ({ sizes, onChooseSize }) => {
    return (
        <div className={styles.container} >
            <div className={styles.filter} >
                <h4 className={styles.title} >Size:</h4>
                <ul className={styles.sizesList} >
                    {sizes.map(size =>
                        <SingleFilter
                            key={size}
                            value={size}
                            chooseSize={onChooseSize} />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Filter;