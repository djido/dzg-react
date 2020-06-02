import React from 'react';
import { useContext } from 'react';
import { DzgContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function ProductsFilter({ products }) {
    const context = useContext(DzgContext);
    const { handleChange, type, quantity, price, minPrice, maxPrice, addidasWinter, sale } = context;

    let types = getUnique(products, 'type');
    types = ['Sve', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(products, 'quantity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>
                 {item}
                </option>
    });

    return (
        <section className="filter-container">
            <Title title="Pokloni s kojima ne možeš pogriješiti" />
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Vrsta artikla</label>
                    <select name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* Select quantity */}
                <div className="form-group">
                    <label htmlFor="quantity">Na stanju</label>
                    <select name="quantity"
                        id="quantity"
                        value={quantity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">Cijena: {price} KN</label>
                    <input type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price" 
                    value={price} 
                    onChange={handleChange} 
                    className="form-control"/>
                </div>
                {/* extras */ }
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                        name="addidasWinter"
                        id="addidasWinter"
                        checked={addidasWinter}
                        onChange={handleChange}
                         />
                        <label htmlFor="addidasWinter">Addidas Zima</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                        name="sale"
                        id="sale"
                        checked={sale}
                        onChange={handleChange}
                         />
                        <label htmlFor="sale">Rasprodaja</label>
                    </div>
                </div>
            </form>
        </section>
    );
}
