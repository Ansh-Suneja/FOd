import React from 'react'
import {GiVibratingSmartphone} from 'react-icons/gi'
import{HiPhoneOutgoing} from 'react-icons/hi'
import {AiTwotonePhone} from 'react-icons/ai'
import { Container,Row,Col,Table,Image } from 'react-bootstrap'
const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                    <h1>PIZZA FAM</h1>
                    <p>Wanna have fun outings
                        and enjoy contact us now..
                    </p>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                            <th className='bg-warning'colSpan={4} style={{textAlign:'center'}}>Our Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><AiTwotonePhone/></td>
                            <td>Mark Sues</td>
                            <td>78945-998465</td>
                            <td>@mdoyt.pizzafam</td>
                            </tr>
                            <tr>
                            <td><HiPhoneOutgoing/></td>
                            <td>Jacob Sues</td>
                            <td>65487-98754</td>
                            <td>@fatso.pizzafam</td>
                            </tr>
                            <tr>
                            <td><GiVibratingSmartphone/></td>
                            <td>Larry Sues</td>
                            <td>89795-89754</td>
                            <td>@twitt.pizzaFam</td>
                            </tr>
                        </tbody>
                        </Table>
                </Col>
                <Col md={6}>
                    <Image src='images/chicken_golden_delight.jpg' style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',marginTop:'50px'}}/>

                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact