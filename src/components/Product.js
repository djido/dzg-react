import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Product({ product }) {
    const { name, slug, images, price } = product;
    return (
        <article className="product">
            <Link to={`/artikli/${slug}`}>
            <div className="product-container">
                <div className="image-container">
                <img src={images[0]} alt={name} />
                </div>
                </div>
            <p className="product-info">{price} KN</p>
            </Link>
        </article>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
