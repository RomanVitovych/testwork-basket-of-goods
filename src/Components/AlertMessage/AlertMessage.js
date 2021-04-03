import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './AlertMessage.module.css';

const AlertMessage = ({ message, alert }) => {
    return (
        <CSSTransition
            in={alert}
            timeout={500}
            classNames={styles}
            unmountOnExit >
            <div className={styles.alert} >
                <p>{message}</p>
            </div>
        </CSSTransition>

    );
};

export default AlertMessage;