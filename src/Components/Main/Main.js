import React from 'react';

import Filter from '../Filter/Filter';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({ sizes, products, addToCart, onChooseSize, size, onSelectSize }) => {
    return (
        <main>
            <Filter sizes={sizes} onChooseSize={onChooseSize}/>
            <ProductsList products={products} addToCart={addToCart} size={size} onSelectSize={onSelectSize} />
        </main>
    );
};

export default Main;