import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Courses from './components/Courses';
import Header from './components/Header';
import About from './components/About';
import PageNotFoundError from './components/404';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Header/>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/courses" component={Courses} />
						<Route path="/about" component={About} />
						<Route component={PageNotFoundError} />
					</Switch>
				</div>
			</Router>
    );
  }
}

export default App;
