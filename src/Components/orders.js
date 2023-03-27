import {useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




 

export default function Order()
{
        const navig=useNavigate();
        return(<>

            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="6">
                <Card>
                    <Card.Header>Orders</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                      <Button variant="primary" onClick={()=>navig('/orderingform')}>Go to Order cakes</Button>
                    </Card.Body>
                </Card> 
                </Col>
                <Col xs lg="6">
                <Card>
                    <Card.Header>Events</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                      <Button variant="primary" onClick={()=>navig('/eventform')}>Go to Event booking </Button>
                    </Card.Body>
                </Card>
                </Col>
              </Row>
            </Container>


            
          


        

</>)
}