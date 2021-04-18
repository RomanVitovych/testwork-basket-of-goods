import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartItem.module.css';


const CartItem = ({
    id,
    url,
    title,
    currFormat,
    price,
    currId,
    style,
    count,
    removeFromCart,
    handleChange,
    otherCount,
    size,
}) => {

    const sum = Number(count) + Number(otherCount);
    
    return (
        <li className={styles.cartItem} >
            <button
                type='button'
                className={styles.cartItem__del}
                onClick={() => removeFromCart(id)} >
            </button>
            <div className={styles.cartItem__thumb} >
                <img src={url} alt={title} />
            </div>
            <div className={styles.cartItem__details} >
                <p className={styles.title} >{title}</p>
                <p className={styles.desc} >{style}</p>
                <p className={styles.desc} >Quantity: {sum}</p>
                <form className={styles.form} onSubmit={(e) => { e.preventDefault() }}>
                    <label>
                        <input
                            className={styles.input}
                            type='number'
                            value={Number(otherCount)}
                            onChange={(e) => { handleChange(e, id) }}
                            />
                    </label>
                </form>
                <p className={styles.size}>Size: {size}</p>
            </div>
            <div className={styles.cartItem__price} >
                <p>Price: <br/>{currFormat}{(price).toFixed(2)} {currId} </p>
                <p>Total price: <br/>{currFormat}{(sum*price).toFixed(2)} {currId} </p>
            </div>           
        </li>
    );
};

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    currFormat: PropTypes.string,
    price: PropTypes.number,
    currId: PropTypes.string,
    style: PropTypes.string,
    count: PropTypes.number,
    removeFromCart: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    otherCount: PropTypes.number,
    size: PropTypes.string
}

export default CartItem;