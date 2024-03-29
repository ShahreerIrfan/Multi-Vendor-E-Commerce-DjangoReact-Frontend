/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '/logo.png';
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { RxArrowRight } from "react-icons/rx";
import { Link } from 'react-router-dom';

const AllCategories = () => {
    return (
        <div>
            <main>
                <div className="container mt-4">
                    <h3 style={{ display: 'inline' }}>All Categories</h3>
                    <a href="#" className='float-end btn btn-dark'>View all product <RxArrowRight /></a>
                    <div className="row mt-4">
                        <div className="col-12 col-md-3 mb-4 mt-4">
                            <div className="card fixed-height">
                                <img src={Logo} className="card-img-top product-img" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title"><Link className='text-decoration-none' to='/category/python'>Category Title</Link></h5>
                                    <h3>Price: 30$</h3>
                                    <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                                </div>
                                <div className="card-footer card-button">
                                    <h6>Product Download: 2303</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mt-4">
                            <div className="card fixed-height">
                                <img src={Logo} className="card-img-top product-img" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title"><a className='text-decoration-none' href="#">Category Title</a></h5>
                                    <h3>Price: 30$</h3>
                                    <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                                </div>
                                <div className="card-footer card-button">
                                    <h6>Product Download: 2303</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mt-4">
                            <div className="card fixed-height">
                                <img src={Logo} className="card-img-top product-img" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title"><a className='text-decoration-none' href="#">Category Title</a></h5>
                                    <h3>Price: 30$</h3>
                                    <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                                </div>
                                <div className="card-footer card-button">
                                    <h6>Product Download: 2303</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4 mt-4">
                            <div className="card fixed-height">
                                <img src={Logo} className="card-img-top product-img" alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title"><a className='text-decoration-none' href="#">Category Title</a></h5>
                                    <h3>Price: 30$</h3>
                                    <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                                </div>
                                <div className="card-footer card-button">
                                    <h6>Product Download: 2303</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default AllCategories;