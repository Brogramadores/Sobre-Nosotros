import React from 'react';
import RedesSociales from '../components/Redes-Sociales';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Redes = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div style={{ paddingTop: '70px' }}>
                <RedesSociales />
            </div>
            <footer id="FooterRedes">
                <Footer />
            </footer>
        </div>
    );
};

export default Redes;