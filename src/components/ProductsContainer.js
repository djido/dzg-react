import React from 'react';
import ProductsFilter from './ProductsFilter';
import ProductList from './ProductList';
import { withDzgConsumer } from '../context';
import Loading from './Loading';

function ProductsContainer({ context }) {
    const { loading, sortedProducts, products } = context;

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <ProductsFilter products={products} />
            <ProductList products={sortedProducts} />
        </>
    );
}

export default withDzgConsumer(ProductsContainer);
