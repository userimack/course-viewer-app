import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
	return(
		<nav className="nav">
				<NavLink exact to="/" className="nav-link" activeStyle={{color: "orange"}} activeClassName>Home</NavLink>
						<span class="nav-link sep">|</span>
				<NavLink to="/courses" className="nav-link" activeStyle={{color: "orange"}} activeClassName>Courses</NavLink>
						<span class="nav-link sep">|</span>
				<NavLink to="/about" className="nav-link" activeStyle={{color: "orange"}} activeClassName>About</NavLink>
		</nav>
	);
}

export default Header;
