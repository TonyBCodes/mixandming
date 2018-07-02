import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';

//import the webpages
import Navbar from "./pages/navbar";
import Main from "./pages/main";
//import Home from "./pages/home";
//import Login from "./pages/login";
//import Register from "./pages/register";
//import NoMatch from "./pages/NoMatch";

//add navbar back in when api, etc is finished.
const App = () => (
    <div>
    <Main/>

    </div>
);

export default App;

//<BrowserRouter>
//    <AllPages />
//</BrowserRouter>
//    <header className="App-header">
//        <div>
//            <Router>
//                <div className="container">
//                    <Switch>
//                        <Route exact path="/" component={Home} />
//                        <Route exact path="/login" component={Login} />
//                        <Route exact path="/register" component={Register} />
//                        <Route component={NoMatch} />
//                    </Switch>
//                </div>
//            </Router>
//        </div>
//        <img src={logo} className="App-logo" alt="logo" />
//        <h1 className="App-title">Welcome to React</h1>
//    </header>
//    <p className="App-intro">
//        To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div >
//    );
//  }
//}

//        <div className="container">
//            <Switch>
//                <Route exact path="/" component={Home} />
//                <Route exact path="/login" component={Login} />
//                <Route exact path="/register" component={Register} />
//            </Switch>
//        </div>
