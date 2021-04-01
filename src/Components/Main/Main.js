import React from 'react';

import Filter from '../Filter/Filter';
import ProductsList from '../ProductsList/ProductsList';

const Main = ({ products, addToCart }) => {
    return (
        <main>
            <Filter />
            <ProductsList products={products} addToCart={addToCart} />
        </main>
    );
};

export default Main;