import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/products/products'
import Basket from './pages/basket/basket'
import './reset.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from './pages/main/main';
import Product from './pages/product/product';

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
