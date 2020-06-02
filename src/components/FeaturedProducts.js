import React, { Component } from 'react';
import { DzgContext } from '../context';
import Loading from './Loading';
import Product from './Product';
import Title from './Title';

export default class FeaturedProducts extends Component {
    static contextType = DzgContext;

    render() {
        let { featuredProducts: products, loading } = this.context;

        products = products.map(product => {
            return <Product key={product.id} product={product} />
        });

        return (
            <section className="featured-products">
                <Title title="Izdvojeni artikli" />
                <div className="featured-products-center">
                    {loading ? <Loading /> : products}
                </div>
            </section>
        )
    }
}
