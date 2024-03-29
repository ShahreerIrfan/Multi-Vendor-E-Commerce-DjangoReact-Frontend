/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'
import Logo from '/logo.png';
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { RxArrowRight } from "react-icons/rx";
import './PopularSellers.css';

const PopularSellers = () => {
    return (
        <div>
            <div className="container mt-4">
                <h3 style={{ display: 'inline' }}>Popular Sellers</h3>
                <a href="#" className='float-end btn btn-dark'>View all Sellers <RxArrowRight /></a>
                <div className="row mt-4">
                    <div className="col-12 col-md-3 mb-4 mt-4">
                        <div className="card fixed-height">
                            <img src={Logo} className="card-img-top product-img" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product Title</h5>
                                <h3>Price: 30$</h3>
                                <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                            </div>
                            <div className="card-footer">
                                Category: <a href="#">Python</a> <a href="#">JavaScript</a>
                            </div>
                            <div className="card-footer card-button">
                                <button className="btn btn-primary mr-2"><LuShoppingCart /> Add to Cart</button>
                                <span className="mx-2"></span> {/* Adding space between the buttons */}
                                <button className="btn btn-outline-danger"><FaHeart /> Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mt-4">
                        <div className="card fixed-height">
                            <img src={Logo} className="card-img-top product-img" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product Title</h5>
                                <h3>Price: 30$</h3>
                                <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                            </div>
                            <div className="card-footer">
                                Category: <a href="#">Python</a> <a href="#">JavaScript</a>
                            </div>
                            <div className="card-footer card-button">
                                <button className="btn btn-primary mr-2"><LuShoppingCart /> Add to Cart</button>
                                <span className="mx-2"></span> {/* Adding space between the buttons */}
                                <button className="btn btn-outline-danger"><FaHeart /> Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mt-4">
                        <div className="card fixed-height">
                            <img src={Logo} className="card-img-top product-img" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product Title</h5>
                                <h3>Price: 30$</h3>
                                <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                            </div>
                            <div className="card-footer">
                                Category: <a href="#">Python</a> <a href="#">JavaScript</a>
                            </div>
                            <div className="card-footer card-button">
                                <button className="btn btn-primary mr-2"><LuShoppingCart /> Add to Cart</button>
                                <span className="mx-2"></span> {/* Adding space between the buttons */}
                                <button className="btn btn-outline-danger"><FaHeart /> Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mt-4">
                        <div className="card fixed-height">
                            <img src={Logo} className="card-img-top product-img" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product Title</h5>
                                <h3>Price: 30$</h3>
                                <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                            </div>
                            <div className="card-footer">
                                Category: <a href="#">Python</a> <a href="#">JavaScript</a>
                            </div>
                            <div className="card-footer card-button">
                                <button className="btn btn-primary mr-2"><LuShoppingCart /> Add to Cart</button>
                                <span className="mx-2"></span> {/* Adding space between the buttons */}
                                <button className="btn btn-outline-danger"><FaHeart /> Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularSellers;