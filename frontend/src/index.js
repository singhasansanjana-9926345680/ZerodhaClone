import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './landing_page/home/HomePage';




import AboutPage from './landing_page/about/Aboutpage';
import ProductPage from './landing_page/products/Productspage';
import PricingPage from './landing_page/pricing/Pricingpage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFoundPage from './landing_page/NotFound';
export {default as Login} from './landing_page/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <App/>
 <Routes>
  
  <Route path="/" element={<HomePage/>}/>
  
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
 <Footer/> 
  </BrowserRouter>
);

