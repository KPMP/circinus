import React, { Component } from 'react';
import { Row, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
	render() {
		return (
			<Row className="nav-container container-fluid">
				<NavbarBrand href="/">
					<img src="img/logo.png" alt="KPMP Demo Site" className="logo"/>
				</NavbarBrand>
			</Row>
			
		);
	}
}

export default NavBar;