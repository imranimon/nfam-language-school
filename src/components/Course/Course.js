import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { name, details, fee, img, duration } = props.course;
    return (
        <div>
            <Col>
                <Card className='h-100'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <ul>
                            {
                                details?.map((txt, index) => <li key={index}>{txt}</li>)
                            }
                        </ul>
                        <Card.Text>
                            Fee: €{fee}
                        </Card.Text>
                        <Card.Text>
                            Duration: {duration}
                        </Card.Text>
                    </Card.Body>
                    {props.children}
                </Card>
            </Col>
        </div>
    );
};

export default Course;