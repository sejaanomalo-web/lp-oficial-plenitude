import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section pt-20">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-merriweather font-bold text-[#001735] mb-6 leading-tight"
            >
              Cuidamos do seu{' '}
              <span className="text-[#cdaa39]">condomínio</span>{' '}
              com eficiência e transparência
            </motion.h1>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative my-8 max-w-3xl mx-auto"
            >
              <div className="relative z-10">
                <img
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  alt="Condomínio moderno e chamativo com design arrojado"
                  src="/imoveis/condominio-piscina.png" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#cdaa39] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#001735] rounded-full opacity-10 blur-xl"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl font-inter text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Somos especialistas em administração predial e assessoria documental imobiliária. 
              Oferecemos soluções completas para a gestão do seu condomínio com total transparência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center group"
              >
                <span>Solicitar Orçamento</span>
              </button>
              
              <button
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Conheça Nossos Serviços
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;