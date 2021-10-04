import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [offers, setOffers] = useState([]);
    const history = useHistory()
    useEffect(() =>
        fetch('./offers.json')
            .then(res => res.json())
            .then(data => setOffers(data)), [])

    const handleOffer = () => {
        history.push('/services')
    }
    return (
        <div className="d-flex justify-content-center">
            {
                offers.length === 0 ? <div className='m-5 p-5'>
                    <Spinner animation="border" variant="secondary"/>
                </div>  :
                    <div>
                        <Row className="p-5 text-center w-100">
                            <h1 className="text-secondary">Learn a Language. Open Your World</h1>
                            <p>Anytime and anywhere: Learn German online and with our proven quality. No matter whether you are a beginner or an advanced learner no matter whether you want to learn German for professional or private reasons, you will find the right German online course for you.</p>
                        </Row>
                        <Row md={2} xs={1} className="p-5 pt-0 gy-4 w-100">
                            {
                                offers?.map(offer => <Course
                                    key={offer.id} course={offer}>
                                    <button onClick={handleOffer} className="btn btn-outline-secondary">View Offer</button>
                                </Course>)
                            }
                        </Row>
                    </div>
            }
        </div>
    );
};

export default Home;