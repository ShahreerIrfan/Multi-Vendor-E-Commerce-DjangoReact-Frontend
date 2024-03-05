/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '/logo.png';
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { RxArrowRight } from "react-icons/rx";
const SingleProduct = (props) => {
    return (


                <div className="col-12 col-md-3 mb-4 mt-4">
                    <div className="card fixed-height">
                        <img src={Logo} className="card-img-top product-img" alt="Product" />
                        <div className="card-body">
                            <h5 className="card-title"><a className='text-decoration-none' href="#">{props.title}</a></h5>
                            <h3>Price: 30$</h3>
                            <p className="card-text">Some quick example text to describe the product.Some quick example text to describe the product.</p>
                        </div>
                        <div className="card-footer card-button">
                            <h6>Product Download: 2303</h6>
                        </div>
                    </div>
                </div>


    );
};

export default SingleProduct;