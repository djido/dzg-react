import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="Tražena stranica ne postoji!">
                    <Link to="/" className="btn-primary">
                        Nazad na početnu
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default NotFound;