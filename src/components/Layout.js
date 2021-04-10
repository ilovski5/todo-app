import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="sm">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
