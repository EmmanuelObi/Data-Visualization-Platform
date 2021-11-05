import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<div className='container-fluid'>
				<nav className='navbar navbar-expand-lg navbar-light sticky-top'>
					<a className='navbar-brand' href='/'>
						SkyHigh
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
