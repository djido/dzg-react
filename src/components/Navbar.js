import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/main-logo.png';
import { FaBars } from 'react-icons/fa';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo-image" />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}>
                            <FaBars className="nav-icon" />
                        </button>
                    </div>
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Početna</Link>
                        </li>
                        <li>
                            <Link to="/artikli">Artikli</Link>
                        </li>
                        <li>
                            <Link to="/igraci">Igrači</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
