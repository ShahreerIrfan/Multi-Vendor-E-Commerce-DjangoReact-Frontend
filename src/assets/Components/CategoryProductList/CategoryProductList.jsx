/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '/logo.png';
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import SingleProduct from '../SingleProduct/SingleProduct';
const CategoryProductList = () => {
    return (
        <div>
            <div className="container">

                <div className="row">
                    <SingleProduct title='Django Project'></SingleProduct>
                    <SingleProduct title='Django Project'></SingleProduct>
                    <SingleProduct title='Django Project'></SingleProduct>
                    <SingleProduct title='Django Project'></SingleProduct>
                    <SingleProduct title='Django Project'></SingleProduct>
                    <SingleProduct title='Django Project'></SingleProduct>
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

        </div>
    );
};

export default CategoryProductList;