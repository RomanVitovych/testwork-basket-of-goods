import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductsList.module.css';


const ProductsList = ({ products, addToCart, size, onSelectSize }) => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <ul className={styles.productsList}>
                    {products.map(prod => 
                        <ProductItem
                            key={prod.id}
                            url={prod.img}
                            title={prod.title}
                            currFormat={prod.currencyFormat}
                            price={prod.price}
                            currId={prod.currencyId}
                            style={prod.style}
                            freeShipping={prod.isFreeShipping}
                            isAvailable={prod.availableSizes}
                            addToCart={addToCart}
                            id={prod.id}
                            size={size}
                            onSelectSize={onSelectSize}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProductsList;