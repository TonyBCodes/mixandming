// JavaScript source code
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import UserLogin from "./usr_login";
import UserRegister from "./usr_register";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/usr_login' component={UserLogin} />
            <Route exact path='/usr_register' component={UserRegister} />
        </Switch>
    </main>
)

export default Main;