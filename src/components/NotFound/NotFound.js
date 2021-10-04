import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src="https://www.seo-kueche.de/wp-content/uploads/404-fehler-page-seiten-titel.jpg" alt="404 Not Found" />
            <div className="d-flex justify-content-center">
                <Link to='/home'>
                    <button className='btn btn-outline-secondary mb-2'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;