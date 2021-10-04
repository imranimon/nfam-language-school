import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() =>
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data)), [])

    // Function for enroll to a course
    const handleEnroll = () => {
        swal("Your Name:", {
            content: "input",
        })
            .then((value) => {
                if (value) {
                    swal({
                        title: "You have successfully enrolled yourself !!",
                        text: `Mr./Mrs: ${value}`,
                        icon: "success",
                        button: "Aww Yess!",
                    });
                }
            });
    }
    return (
        <div className="d-flex justify-content-center">
            {/* Showing spinner when courses are loading */}

            {
                courses.length === 0 ? <div className='m-5 p-5'>
                    <Spinner animation="border" variant="secondary" />
                </div> :
                    <div>
                        <h1 className='text-center mb-3 mt-2 text-secondary'>All Availabe Courses at a Glance</h1>
                        <Row md={3} xs={1} className="p-5 pt-2 gy-4 w-100">
                            {/* Showing courses dynamically */}
                            {
                                courses?.map(course => <Course
                                    key={course.id} course={course}>
                                    <button onClick={handleEnroll} className="btn btn-outline-secondary">Enroll Yourself</button>
                                </Course>)
                            }
                        </Row>
                    </div>
            }
        </div>

    );
};

export default Services;