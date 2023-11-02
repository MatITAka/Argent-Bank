import './assets/css/main.css';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Logged from './pages/logged';



function App() {

  return (
    <BrowserRouter>
    <Header />     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>    
        <Route path="/logged" element={<Logged/>}/>
        <Route path="*" element={<Home />}/>
      </Routes>
      <Footer />
  </BrowserRouter>

  );
}

export default App;
