import React, { Component } from 'react';
import { DzgContext } from '../context';
import Loading from './Loading';
import Product from './Product';
import Title from './Title';

export default class Addidas extends Component {
    static contextType = DzgContext;

    render() {
        let { addidasProducts: products, loading } = this.context;

        products = products.map(product => {
            return <Product key={product.id} product={product} />
        });

        return (
            <section className="featured-products">
                <Title title="Addidas oprema za hladnije dane" />
                <div className="featured-products-center">
                    {loading ? <Loading /> : products}
                </div>
            </section>
        )
    }
}
