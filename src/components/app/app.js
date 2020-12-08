import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ShopHeader from "../shop-header";
import {CartPage, HomePage} from "../pages";


const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    )
};

export default App;
