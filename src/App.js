import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardDeck, Row, Col } from 'reactstrap';
import ReactGA from 'react-ga';

const 

ReactGA.initialize('UA-124331187-5');
function logPageView(location, action) {
	ReactGA.set({ page: location.pathname + location.search });
	ReactGA.pageview(location.pathname + location.search);
}

class App extends Component {

	componentWillMount() {
		logPageView(window.location, "");
	}
	
	handleClick = (location) => {
		ReactGA.event({
            category: 'Navigation',
            action: location
        });
		window.location = '/' + location;
	}
	
	render() {
    return (
      <div>
        <NavBar />
        <div id="demo-site">
	        <Row >
	        	<Col><h2> KPMP Software Demonstrations </h2></Col>
	        </Row>
	        <Row>
	        	<Col>This landing page provides links to all of our ongoing software mock-ups and demonstrations. These are all works-in-progress. We welcome your feedback.</Col>
	        </Row>
	        <Row className="link-section-header">
	        	Application Demos
	        </Row>
	        <Row id="app-links">
	        	<CardDeck>
				        <Card className="clickable" onClick={()=> this.handleClick("dpr")}>
				        	<CardBody>
				        		<CardTitle tag="h4">Digital Pathology Repository (DPR)</CardTitle>
					        	<CardSubtitle tag="h5">Slide Viewer Concept</CardSubtitle>
					        	<CardText>This is a demonstration of the slide viewing capabilities that will be in the Digital Pathology Repository. This demonstration has been pre-loaded with nephrectomy cases from Pilot 1.</CardText>
				        	</CardBody>
				        </Card>
				        
				        <Card className="clickable" onClick={()=> this.handlClick("atlas")}>
				        	<CardBody>
					        	<CardTitle tag="h4">Kidney Tissue Atlas</CardTitle>
					        	<CardSubtitle tag="h5">Transcriptomics data visualizations</CardSubtitle>
					        	<CardText>This is a demonstration of some of the the transcriptomics data visualizations we envision putting into the Kidney Tissue Atlas. The data in this demonstration is single-cell and single-nucleus RNA-seq data from the Pilot 1 samples.</CardText>
				        	</CardBody>
				        </Card>
		        </CardDeck>
	        </Row>
        </div>
      </div>
    );
  }
}

export default App;
