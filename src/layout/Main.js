import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer.js/Footer';
import Header from '../Shared/Herder.js/Header';
// import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;