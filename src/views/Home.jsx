import React from 'react'
import Header from '../components/Header';
import About from '../components/About';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div className='home-view mt-5 mb-5 py-5'>
            <Header />
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home