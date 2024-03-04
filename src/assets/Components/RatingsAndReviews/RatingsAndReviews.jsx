/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RatingsAndReviews = () => {
    return (
        <div className="container mt-5 mb-5">
            <Carousel className='mt-4' style={{ background: '#202427' }}>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#202427', height: '200px', width: '100%' }}>
                        <Carousel.Caption className="text-light text-center">
                            <h3>This is the customer Review</h3>
                            <p>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                Customer name
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#202427', height: '200px', width: '100%' }}>
                        <Carousel.Caption className="text-light text-center">
                            <h3>This is the customer Review</h3>
                            <p>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                Customer name
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#202427', height: '200px', width: '100%' }}>
                        <Carousel.Caption className="text-light text-center">
                            <h3>This is the customer Review</h3>
                            <p>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                Customer name
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RatingsAndReviews;
