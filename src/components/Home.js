import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
		<div class="jumbotron">
			<h1>Pluralsight Administration</h1>
			<h5>React, Redux and React Router for ultra-responsive web apps.</h5>

			<Link className="btn btn-primary btn-lg" role="button" to="/about">Learn More</Link>

    </div>
  );
}

export default Home;
