import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductItem.module.css';


const ProductItem = ({
    id,
    url,
    title,
    currFormat,
    price,
    currId,
    style,
    freeShipping,
    isAvailable,
    addToCart,
    size,
    onSelectSize
}) => {

    return (
        <li className={styles.productItem} >
            <img
                className={styles.image}
                src={url}
                alt={title}
                height='320'
                width='240' />
            <p className={styles.name} >{title}</p>
            <p className={styles.price} >Price: {currFormat}{price} {currId}</p>
            <p className={styles.style} >Style: {style}</p>
            <label className={styles.size} > Available sizes:
                <select name='size' value={size} onChange={(e) => onSelectSize(e)}>
                    <option value='' disabled>please select</option>
                    {isAvailable.map(el => <option value={el}>{el}</option>)}
                </select>
            </label>
            {freeShipping && <p className={styles.isFree} >Free shipping!</p>}
            <button
                className={styles.btn}
                type='button'
                onClick={() => addToCart(id)}
            >Add to cart</button>
        </li>
    );
};

ProductItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    title: PropTypes.string,
    currFormat: PropTypes.string,
    price: PropTypes.number.isRequired,
    currId: PropTypes.string,
    style: PropTypes.string,
    freeShipping: PropTypes.bool,
    isAvailable: PropTypes.array,
    addToCart: PropTypes.func.isRequired,
    size: PropTypes.string,
    onSelectSize: PropTypes.func.isRequired,
};

export default ProductItem;