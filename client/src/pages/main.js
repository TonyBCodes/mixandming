// JavaScript source code
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </main>
)

export default Main;