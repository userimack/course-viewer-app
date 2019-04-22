import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
	return(
		<nav className="nav">
				<NavLink exact to="/" className="nav-link" activeStyle={{color: "orange"}} activeClassName="active">Home</NavLink>
						<span className="nav-link sep">|</span>
				<NavLink to="/courses" className="nav-link" activeStyle={{color: "orange"}} activeClassName="active">Courses</NavLink>
						<span className="nav-link sep">|</span>
				<NavLink to="/about" className="nav-link" activeStyle={{color: "orange"}} activeClassName="active">About</NavLink>
		</nav>
	);
}

export default Header;
