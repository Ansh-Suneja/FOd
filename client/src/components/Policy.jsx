import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'

const Policy = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <h1 style={{textAlign:'center',color:'royalblue',fontFamily:'revert',fontWeight:'bold'}}>Terms And Policy</h1>
        <Row>
          <Col md={6}>
            <Image src='images\terms-and-Conditions.png' style={{width:'100%',marginTop:'50px'}}/>
            &nbsp;
            <p>We value our customers and are here for you</p>
          </Col>
          <Col md={6} style={{marginTop:'100px'}}>
            <ol>
              <li style={{fontWeight:'bold'}}>Order Timings are determined based on locations . Please try to be passive in response to order timings</li>
              <li style={{fontWeight:'bold'}}>Offers are time limited and will cycle through weeks</li>
              <li style={{fontWeight:'bold'}}>Return of payments shall be issued within hour of order placed</li>
              <li style={{fontWeight:'bold'}}>On successive orders we will remove previous history from time to time to keep your experience happy</li>
              <li style={{fontWeight:'bold'}}>The Company has sole right to cancel an order if due to any underlying circumstaces..<ul>
                <li>Natural Calamity</li>
                <li>Payment Failure(if online..)</li>
                </ul></li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Policy