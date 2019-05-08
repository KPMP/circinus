import React, { Component } from 'react';
import { Navbar, NavbarBrand, Col, Button } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar id="navbar" className="px-1 py-1 fixed-top">
        <Col xs="12" className="navbar-header">
            <NavbarBrand className="d-flex align-items-center navbar-brand">
              <img src="img/logo.png" alt="KPMP Demo Site" className="logo" />
            </NavbarBrand>
        </Col>
      </Navbar>
    );
  }
}

export default NavBar;