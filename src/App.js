
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// import WebFont from 'webfontloader';
// import { TbCherryFilled } from "react-icons/tb";


import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from "./images/"
import Home from "./Components/home";
import Gallery from "./Components/gallery";
import Orders from "./Components/orders";
import About from "./Components/about";
import Blogs from "./Components/blogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    
    return (
        <>
            <BrowserRouter>
                <div className="header">
                <Navbar className="navbar" bg="transparent" >
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet"></link>
                        <div className="menu-toggle">
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-times"></i>
                        </div>
                        <Nav className="nav-list">
                            <Nav.Link className="nav-item" href="/">HOME</Nav.Link>
                            <Nav.Link className="nav-item" href="/gallery">GALLERY</Nav.Link>
                            <Nav.Link className="nav-item" href="/about">ABOUT</Nav.Link>
                            <Nav.Link className="nav-item" href="/orders">ORDERS</Nav.Link>
                            <Nav.Link className="nav-item" href="/blogs">BLOGS</Nav.Link>


                        </Nav>
                        </Navbar>
                    </div>
                <Routes>
                    <Route exact path="/"
                        element={<Home/>}></Route>
                    <Route exact path="/gallery"
                        element={<Gallery/>}></Route>
                    <Route exact path="/about"
                        element={<About/>}></Route>
                    <Route exact path="/orders"
                        element={<Orders/>}></Route>
                    <Route exact path="/blogs"
                        element={<Blogs/>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;