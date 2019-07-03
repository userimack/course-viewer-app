import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import About from './components/About';
import PageNotFoundError from './components/404';

import store from './store';

class CourseApp extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<div>
						<Header/>

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/courses" component={Courses} />
							<Route path="/course/:slug" component={AddCourse} />
							<Route path="/course" component={AddCourse} />
							<Route path="/about" component={About} />
							<Route component={PageNotFoundError} />
						</Switch>
					</div>
				</Router>
			</Provider>
    );
  }
}

export default CourseApp;
