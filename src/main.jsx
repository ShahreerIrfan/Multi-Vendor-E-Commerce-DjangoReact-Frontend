/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Layout from './assets/Components/Layout/Layout';
import AllCategories from './assets/Components/AllCategories/AllCategories';
import CategoryProductList from './assets/Components/CategoryProductList/CategoryProductList';
import AllProducts from './assets/Components/AllProducts/AllProducts';
import ProductDetail from './assets/Components/ProductDetail/ProductDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element : <App></App>
      },
      {
        path : '/Category',
        element: <AllCategories></AllCategories>
      },
      {
        path:'/category/python',
        element:<CategoryProductList></CategoryProductList>
      },
      {
        path:'/products',
        element:<AllProducts></AllProducts>
      },
      {
        path:'/product-detail',
        element:<ProductDetail></ProductDetail>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
// ......