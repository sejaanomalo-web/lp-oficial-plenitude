import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Plenitude - Administradora de Condomínios e Assessoria Imobiliária</title>
        <meta name="description" content="Cuidamos do seu condomínio com eficiência e transparência. Oferecemos gestão administrativa, financeira, assessoria ao síndico e serviços imobiliários completos." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;