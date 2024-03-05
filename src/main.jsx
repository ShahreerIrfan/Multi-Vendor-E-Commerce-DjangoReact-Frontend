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
        path:'category/python',
        element:<CategoryProductList></CategoryProductList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)