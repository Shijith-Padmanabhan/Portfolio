import React from 'react'
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Container = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Container;