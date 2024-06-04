import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <h1>Our Faction</h1>
            <p>We are committed to service here and would provide our customers the best delecacies</p>&nbsp;
            
            <h1 style={{fontFamily:"cursive",color:'red'}}>Our Speciality</h1>
            <Row>
                <Col md={6}>
                    <h2>Trusted items</h2>
                    <p>We have a range of suppliers and all of our ingredients are quality checked.</p>
                </Col>
                <Col md={6}>
                    <h2>Happy Voices</h2>
                    <p>Our Customers have graded us on all parameters without any form of biaseness and we have stay true to thier responses </p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Stake Holders</h2>
                    <p>We are a reputed faction and have collaborated with many firms and organisations</p>
                </Col>
                <Col md={3}>
                    <h3>Our Head</h3>
                    <img
                        src="images/cartoon-drawing-of-a-chef-vector.jpg"
                        style={{width:"100%"}}/>
                </Col>
                <Col md={3}style={{marginTop:'50px'}}>
                    <h2 style={{fontFamily:"cursive",color:'orange'}}>Rasengan-Warrior</h2>
                    <p>Our head chef ,"mastered in ninja arts" has honed his skills to the best levels and is here to serve the best food.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About