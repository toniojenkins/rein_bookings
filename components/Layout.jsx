import React from 'react';
import Footer from './Footer';
import MailList from './MailList';
import Navbar from './Navbar';
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
