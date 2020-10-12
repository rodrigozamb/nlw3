import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import OrphanagesMap from './pages/OrphanagesMap'
import Landing from './pages/Landing';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </Switch>
        </BrowserRouter>
    );

}


export default Routes;