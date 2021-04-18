import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';

import './Cart.css';


const Cart = ({
    cartStatus,
    onToggle,
    order,
    removeFromCart,
    onHandleChange,
    onSortByNameA,
    onSortByNameB,
    onSortByPriceA,
    onSortByPriceB,
    onSortByQuantityA,
    onSortByQuantityB,
    size,
}) => {

    const total = () => {
        return order.reduce((acc, orderItem) =>
            acc + orderItem.price*(orderItem.count+Number(orderItem.otherCount)), 0).toFixed(2);
    };

    const count = () => {
        return order.reduce((acc, el) =>
        acc + el.count + Number(el.otherCount), 0);
    };

    return (
        <div className={cartStatus ? 'float-cart float-cart--open' : 'float-cart'}>
            <button className='bag bag--float-cart-closed' onClick={onToggle} >
                <span className='bag__quantity' >{order.length}</span>
            </button>
            <div className='float-cart__content' >
                <div className='float-cart__header' >
                    <span className='bag' >
                        <span className='bag__quantity' >{count()}</span>
                    </span>
                    <span className='float-cart__header-title' >Cart </span>
                </div>
                <ul className='sort-list' >
                    <li className='sort-list__item' >
                        <p>Sort by name</p>
                        <button 
                        type='button' 
                        onClick={() => onSortByNameA(order)}>
                            a-z
                        </button>
                        <button 
                        type='button' 
                        onClick={() => onSortByNameB(order)}>
                            z-a
                        </button>
                    </li>
                    <li className='sort-list__item' >
                        <p>Sort by price</p>
                        <button 
                        type='button' 
                        onClick={() => onSortByPriceA(order)}>
                            &#8593;
                        </button>
                        <button 
                        type='button' 
                        onClick={() => onSortByPriceB(order)}>
                            &#8595;
                        </button>
                    </li>
                    <li className='sort-list__item' >
                        <p>Sort by quantity</p>
                        <button 
                        type='button' 
                        onClick={() => onSortByQuantityA(order)}>
                            &#8593;
                        </button>
                        <button 
                        type='button' 
                        onClick={() => onSortByQuantityB(order)}>
                            &#8595;
                        </button>
                    </li>
                </ul>
                <ul className='float-cart__card-container' >
                    {order.map(orderItem => <CartItem
                        id={orderItem.id}
                        key={orderItem.id}
                        url={orderItem.img}
                        title={orderItem.title}
                        currFormat={orderItem.currencyFormat}
                        price={orderItem.price}
                        currId={orderItem.currencyId}
                        style={orderItem.style}
                        count={orderItem.count}
                        removeFromCart={removeFromCart}
                        handleChange={onHandleChange}
                        otherCount={orderItem.otherCount}
                        size={size}
                    />)}
                </ul>
                <div className='float-cart__footer' >
                    <div className='total' >
                        <p className='sub' >Total</p>
                        <p className='price-total' >$ {total()}</p>
                    </div>
                    <button type='button' className='buy-btn' >Checkout</button>
                </div>
            </div>           
        </div>
    );
};

Cart.propTypes = {
    cartStatus: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    order: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    onSortByNameA: PropTypes.func.isRequired,
    onSortByNameB: PropTypes.func.isRequired,
    onSortByPriceA: PropTypes.func.isRequired,
    onSortByPriceB: PropTypes.func.isRequired,
    onSortByQuantityA: PropTypes.func.isRequired,
    onSortByQuantityB: PropTypes.func.isRequired,
    size: PropTypes.string,
};

export default Cart;