import React from 'react';

import Filter from '../Filter/Filter';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({ sizes, products, addToCart, onChooseSize }) => {
    return (
        <main>
            <Filter sizes={sizes} onChooseSize={onChooseSize}/>
            <ProductsList products={products} addToCart={addToCart} />
        </main>
    );
};

export default Main;