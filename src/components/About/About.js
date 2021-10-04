import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="text-center p-5 d-flex justify-content-center">
            <div>
                <Row className="w-100">
                    <h1 className='text-secondary'>Welcome to the NFam Language School</h1>
                    <p className="mt-2">It was pure chance that the classic grammar translation method of language learning gave way to the dynamic and active NFam Method. When NFam hired an assistant who only spoke French, he discovered that the traditional form of instruction, which focused on rote memorization, learning grammar, and translating texts, was less effective than having his students speak the language actively from day one. From this point onward, he increasingly moved toward a style of instruction that allowed students to immerse themselves in the new language – and the NFam Method was born</p>
                    <p className="mt-2">1878 saw the launch of the first NFam School of Languages in Berlin. Today NFam is one of the leading global players in the fields of language learning, intercultural competence, and management and leadership skills, with more than 350 NFam Centers in over 70 countries.</p>

                </Row>
                <Row className="mt-5 w-100">
                    <h1 className='text-secondary'>Why You Should Choose Us</h1>
                    <ListGroup className="mt-2">
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">Courses for kids and teens:</span> Our Essen language center offers weekly language courses for kids and teens ages 6 years and up, not to mention our language camps during school vacations. Here, the young people can make particularly rapid progress because they receive instruction every day. In addition to language courses, we also offer programming classes for kids and teens through the Digital School.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">State-subsidized courses:</span> Many of our German courses qualify for funding. This includes our integration courses (level A1 to B1) and German for Professional Purposes (DeuFöV) courses. It is also possible to apply the AVGS training voucher to individual instruction or the FbW continuing education voucher to group classes from the Federal Employment Agency. Courses that can be subsidized with an AVGS training voucher also can be taken either directly in our cen
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">Preparation courses:</span> If you are planning to take an officially recognized language test such as the telc, LCCI, TOEIC, TOEFL, Cambridge, or IELTS examinations, we can provide you with optimal assistance in your preparation. You can even sit for the telc exam right in our language school on several different dates. Regardless of which language test you are interested in taking, our experienced team of instructors knows exactly what it takes to do well and can help you get ready for that specific exam.
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            </div>
        </div>
    );
};

export default About;