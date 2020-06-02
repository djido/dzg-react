import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';
import Addidas from '../components/Addidas';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="savršeni pokloni" subtitle="Ideje za poklone najvjernijim navijačima">
                    <Link to="/artikli" className="btn-primary">
                        Pogledaj sve
                </Link>
                </Banner>
            </Hero>
            <FeaturedProducts />
            <Services />
            <Addidas />
        </>
    );
}

export default Home;