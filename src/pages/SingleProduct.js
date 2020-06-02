import React, { Component } from 'react';
import { FaCaretRight } from 'react-icons/fa';
import defaultBcg from '../images/training.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { DzgContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = DzgContext;

    render() {
        const { getProduct } = this.context;
        const product = getProduct(this.state.slug);
        if (!product) {
            return <div className="error">
                <h3>Traženi artikl ne postoji!</h3>
                <Link to="/artikli" className="btn-primary">
                    Nazad na Artikle
                </Link>
            </div>
        }

        const { name, description, quantity, price, extras, addidas, sale, images } = product;
        return (
            <>
                <StyledHero img={images[2]}>
                    <Banner title={`${name}`}>
                        <Link to="/artikli" className="btn-primary">
                            Nazad na artikle
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-product">
                    <div className="single-product-info">
                            <div className="single-product-image">
                                <img src={images[0]} alt="artikl" />
                            </div>
                        <article className="info">
                            <h3>Opis</h3>
                            <h6>{description}</h6>
                            <h3>Info</h3>
                            <h6>Cijena: {price} KN</h6>
                            <h6>Dostupna količina:  {quantity}</h6>
                            <h6>{sale ? "Na rasprodaji" : "Nema popusta na ovaj artikl"}</h6>
                            <h6>{addidas && "Original Addidas proizvod"}</h6>
                        </article>
                    </div>
                </section>
                <section className="product-extras">
                    <h3>Dodatni detalji</h3>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}><FaCaretRight /> {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
