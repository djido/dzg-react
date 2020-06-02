import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Players from './pages/Players';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/artikli" component={Products} />
                <Route exact path="/igraci" component={Players} />
                <Route exact path="/artikli/:slug" component={SingleProduct} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default App;
