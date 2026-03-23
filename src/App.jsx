import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Portal from '@/pages/Portal';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Plenitude - Administradora de Condomínios</title>
        <meta name="description" content="Cuidamos do seu condomínio com eficiência e transparência. Gestão administrativa, financeira e assessoria documental imobiliária." />
        <meta name="keywords" content="administradora de condomínios, gestão predial, assessoria imobiliária, síndico, condomínio" />
        <meta property="og:title" content="Plenitude - Administradora de Condomínios" />
        <meta property="og:description" content="Cuidamos do seu condomínio com eficiência e transparência." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
        <Toaster />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;