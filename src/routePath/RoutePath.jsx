import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Login from '../login/Login';
import AppStore from '../appStore/AppStore';
import Pricing from '../pricing/Pricing';
import Features from '../features/Features';
import Faq from '../faq/Faq';
import ContactUs from '../contactUs/ContactUs';
import Register from '../register/Register';
import Footer from '../footer/Footer';

export default function RoutePath() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app-store" element={<AppStore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}
