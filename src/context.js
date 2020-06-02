import React, { Component } from 'react';
import items from './data';
import playerData from './playerData';

const DzgContext = React.createContext();

class DzgProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        players: [],
        sortedPlayers: [],
        featuredProducts: [],
        addidasProducts: [],
        loading: true,
        type: 'Sve',
        position: 'Sve',
        country: 'Sve',
        quantity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        addidasWinter: false,
        sale: false
    };

    componentDidMount() {
        let products = this.formatData(items);
        let players = this.formatData(playerData);
        let featuredProducts = products.filter(product => product.featured === true);
        let addidasProducts = products.filter(product => product.addidasWinter === true);
        let maxPrice = Math.max(...products.map(item => item.price));

        this.setState({
            products: products,
            sortedProducts: products,
            players: players,
            sortedPlayers: players,
            featuredProducts: featuredProducts,
            addidasProducts: addidasProducts,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map
                (image => image.fields.file.url);
            let product = { ...item.fields, images, id };

            return product;
        });

        return tempItems;
    };

    getProduct = slug => {
        let tempProducts = [...this.state.products];

        const product = tempProducts.find((product) =>
            product.slug === slug);
        return product;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ?
            target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },
            this.filtering
        )
    };

    filtering = () => {
        let { products, type, quantity, price, addidasWinter, sale, players, position, nationalTeam, country, stranger } = this.state;
        // all the products and players
        let tempProducts = [...products];
        let tempPlayers = [...players];
        // transform value
        quantity = parseInt(quantity);
        price = parseInt(price);

        // filter by type
        if(type !== 'Sve') {
            tempProducts = tempProducts.filter(product => product.type === type);
        }
        // filter by quantity 
        if (quantity !== 1){
            tempProducts = tempProducts.filter(product => product.quantity >= quantity);
        }
        // filter by price
        tempProducts = tempProducts.filter(product => product.price <= price);
       // filter by addidasWinter
        if(addidasWinter) {
            tempProducts = tempProducts.filter(product => product.addidasWinter === true);
        }
       // filter by sale
        if(sale) {
            tempProducts = tempProducts.filter(product => product.sale === true);
        }

        if(position !== 'Sve') {
            tempPlayers = tempPlayers.filter(player => player.position === position);
        }
        if(country !== 'Sve') {
            tempPlayers = tempPlayers.filter(player => player.country === country);
        }
        // filter by nationalTeam
        if(nationalTeam) {
            tempPlayers = tempPlayers.filter(player => player.nationalTeam === true);
        }
        // filter by Stranger
        if(stranger) {
            tempPlayers = tempPlayers.filter(player => player.stranger === true);
        }

        //change state
        this.setState({
            sortedProducts: tempProducts,
            sortedPlayers: tempPlayers
        });
    };

    render() {
        return (
            <DzgContext.Provider value={{
                ...this.state,
                getProduct: this.getProduct,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </DzgContext.Provider>
        );
    }
}

const DzgConsumer = DzgContext.Consumer;

export function withDzgConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <DzgConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </DzgConsumer>
    }
}

export { DzgProvider, DzgConsumer, DzgContext };