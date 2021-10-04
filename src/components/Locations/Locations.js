import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Branch from '../Branch/Branch';
import './Locations.css'

const Locations = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch('./locations.json')
            .then(res => res.json())
            .then(data => setLocations(data))
    }, [])
    return (
        <div className="d-flex justify-content-center">
            {/* Showing spinner when locations are loading */}

            {
                locations.length === 0 ? <div className='m-5 p-5'>
                    <Spinner animation="border" variant="secondary" />
                </div> :
                    <div className="mb-3">
                        <h1 className='text-center mb-3 mt-2 text-secondary'>Our Locations</h1>
                        <Row xs={1} md={2} className="g-4">
                            {/* Showing locations dynamically */}
                            {
                                locations?.map(location => <Branch key={location.name}
                                    location={location}></Branch>)
                            }
                        </Row>
                    </div>
            }
        </div>

    );
};

export default Locations;