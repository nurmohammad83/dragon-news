import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer';
import Header from '../Pages/Sheard/Header';
import LeftSideNav from '../Pages/Sheard/LeftSideNav';
import RightSideNav from '../Pages/Sheard/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                   <LeftSideNav/>
                    </Col>
                    <Col lg="7">
                        <Outlet/>
                    </Col>
                    <Col lg="3">
                    <RightSideNav/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default Main;