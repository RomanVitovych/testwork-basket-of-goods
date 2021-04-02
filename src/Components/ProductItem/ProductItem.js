import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductItem.module.css';


const Products = ({
    keyId,
    url,
    title,
    currFormat,
    price,
    currId,
    style,
    freeShipping,
    isAvailable,
    addToCart,
    id 
}) => {

    return (
        <li key={keyId} className={styles.productItem}>
            <img
                className={styles.image}
                src={url}
                alt={title}
                height='320'
                width='240' />
            <p className={styles.name} >{title}</p>
            <p className={styles.price} >Price: {currFormat}{price} {currId}</p>
            <p className={styles.style} >Style: {style}</p>
            <p className={styles.size} >
                Available sizes: {isAvailable.map(el => <span>{el}</span>)}
            </p>
            {freeShipping && <p className={styles.isFree} >Free shipping!</p>}
            <button
                className={styles.btn}
                type='button'
                onClick={() => addToCart(id)}
            >Add to cart</button>
        </li>
    );
};

Products.propTypes = {
    keyId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    currFormat: PropTypes.string,
    price: PropTypes.number.isRequired,
    currId: PropTypes.string,
    style: PropTypes.string,
    freeShipping: PropTypes.bool.isRequired,
};

export default Products;