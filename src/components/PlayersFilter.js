import React from 'react';
import { useContext } from 'react';
import { DzgContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function PlayersFilter({ players }) {
    const context = useContext(DzgContext);
    const { handleChange, position, nationalTeam, country,stranger } = context;

    let positions = getUnique(players, 'position');
    positions = ['Sve', ...positions];
    positions = positions.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let countries = getUnique(players, 'country');
    countries = ['Sve', ...countries];
    countries = countries.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="Naši nogometaši" />
            <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="position">Pozicija</label>
                        <select name="position"
                            id="position"
                            value={position}
                            className="form-control"
                            onChange={handleChange}>
                            {positions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Državljanstvo</label>
                        <select name="country"
                            id="country"
                            value={country}
                            className="form-control"
                            onChange={handleChange}>
                            {countries}
                        </select>
                    </div>
                    <div className="players-checkbox">
                        <input type="checkbox"
                            name="nationalTeam"
                            id="nationalTeam"
                            checked={nationalTeam}
                            onChange={handleChange}
                        />
                        <label htmlFor="nationalTeam">Reprezentativac</label>
                    </div>
                    <div className="players-checkbox">
                        <input type="checkbox"
                            name="stranger"
                            id="stranger"
                            checked={stranger}
                            onChange={handleChange}
                        />
                        <label htmlFor="stranger">Stranac</label>
                    </div>
            </form>
        </section>
    );
}
