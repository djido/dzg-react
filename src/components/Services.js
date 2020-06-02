import React, { Component } from 'react';
import { FaDolly, FaRegCreditCard, FaShuttleVan } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaDolly />,
                title: "BESPLATNA DOSTAVA",
                info: "ZA SVE NARUDŽBE U HRVATSKOJ U VRIJEDNOSTI IZNAD 200 KUNA"
            },
            {
                icon: <FaRegCreditCard />,
                title: "SIGURNO PLAĆANJE",
                info: "PLAĆANJE KARTICAMA NA OVOJ STRANICI JE ENKRIPTIRANO I ZAŠTIĆENO"
            },
            {
                icon: <FaShuttleVan />,
                title: "BRZA DOSTAVA",
                info: "DO ŠEST RADNIH DANA ZA DOSTAVU U HRVATSKOJ, EU I OSTATKU SVIJETA"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Prednosti Online kupovine" />
                <div className="services-center">
                    {this.state.services.map((service,index) => {
                        return <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
