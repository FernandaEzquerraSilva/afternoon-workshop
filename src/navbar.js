import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const makePink = {
    "background-color": "#fec5e5",
}

function Navigation() {
        const [activeKey, setActiveKey] = useState("#home");

        const handleBrandClick = () => {
            setActiveKey("#home");
        }

         return (
            <Navbar expand="lg" style={makePink}>
                <Container>
                    <Navbar.Brand href="#home" onClick={handleBrandClick}>Chari Harold</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav classname="me-auto" activeKey={activeKey} onSelect={(selectedKey)=>setActiveKey(selectedKey)}>
                               <Navbar.Link href="#home">Home</Navbar.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>     
         )
}
export default Navigation;