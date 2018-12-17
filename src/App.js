import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Row id="demo-site">
        	<Col><h1> KPMP Software Demonstrations </h1></Col>
        </Row>
        <Row>
        	<Col sm="3">
		        <Card>
		        	<CardBody>
			        	<CardTitle>Demo: Digital Pathology Repository</CardTitle>
			        	<CardSubtitle>Slide Viewer Functionality</CardSubtitle>
			        	<CardText>Demonstration of the slide viewing functionality for the Digital Pathology Repository.</CardText>
		        	</CardBody>
		        </Card>
	        </Col>
        </Row>
      </div>
    );
  }
}

export default App;
