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
            {/* Showing spinner when offers are loading */}

            {
                offers.length === 0 ? <div className='m-5 p-5'>
                    <Spinner animation="border" variant="secondary"/>
                </div>  :
                    <div>
                        <Row className="p-5 pt-0 text-center w-100">
                            <img className="img-fluid mb-3" src="https://media.istockphoto.com/photos/young-woman-and-man-in-headphones-learning-different-languages-picture-id1032296056?b=1&k=20&m=1032296056&s=170667a&w=0&h=CilP98wuFKV92R5faVBNeeoHRqwfjCMocFPqBedgoCs=" alt="" />
                            <h1 className="text-secondary">Learn a Language. Open Your World</h1>
                            <p>Anytime and anywhere: Learn German online and with our proven quality. No matter whether you are a beginner or an advanced learner no matter whether you want to learn German for professional or private reasons, you will find the right German online course for you.</p>
                        </Row>
                        <Row md={2} xs={1} className="p-5 pt-0 gy-4 w-100">
                            {/* Showing offer dynamically */}
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