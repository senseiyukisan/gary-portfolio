import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import References from '../sections/References';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    {/* <About /> */}
    <References />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
