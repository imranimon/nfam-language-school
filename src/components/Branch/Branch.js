import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Branch.css'

const Branch = (props) => {
    const { name, address, img, mobile } = props.location;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {
                            address?.map((txt, index) => <p
                                key={index}
                            >{txt}</p>)
                        }
                        <Card.Text><i className="fas fa-phone-alt"></i> {mobile}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Branch;