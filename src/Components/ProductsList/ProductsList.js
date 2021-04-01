import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductsList.module.css';


const ProductsList = ({ products, addToCart }) => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <ul className={styles.productsList}>
                    {products.map(prod => 
                        <ProductItem
                            keyId={prod.id}
                            url={prod.img}
                            title={prod.title}
                            currFormat={prod.currencyFormat}
                            price={prod.price}
                            currId={prod.currencyId}
                            style={prod.style}
                            freeShipping={prod.isFreeShipping}
                            addToCart={addToCart}
                            id={prod.id}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProductsList;