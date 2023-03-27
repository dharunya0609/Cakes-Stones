
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// import WebFont from 'webfontloader';
import { TbCherryFilled } from "react-icons/tb";



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" style={{fontFamily: 'Cursive',color:'#ff5886',fontSize:'23px'}}>THE SIGNATURE CAKES & STONES
                       <TbCherryFilled/>
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/gallery">GALLERY</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            <Nav.Link href="/orders">ORDERS</Nav.Link>
                            <Nav.Link href="/blogs">BLOGS</Nav.Link>


                        </Nav>
                    </Container>
                </Navbar>
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