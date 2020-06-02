import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import ProductsContainer from '../components/ProductsContainer';

const Products = () => {
    return (
        <>
            <Hero hero="productsHero">
                <Banner title="Naši artikli">
                    <Link to="/" className="btn-primary">
                        Nazad na početnu
                    </Link>
                </Banner>
            </Hero>
            <ProductsContainer />
        </>
    );
}

export default Products;